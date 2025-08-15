import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("demo"); // "demo" or "package"

  const [stats, setStats] = useState({
    total: 0,
    verified: 0,
    pending: 0,
    today: 0,
  });

  const cellStyle = {
    padding: "12px",
    border: "1px solid #ccc",
    textAlign: "left",
  };

  const getAPI = () =>
    type === "demo" ? "/api/bookings" : "/api/package-bookings";

  const getDeleteAPI = () =>
    type === "demo"
      ? "/api/bookings/bulk-delete"
      : "/api/bookings/bulk-delete";  

  const fetchBookings = async () => {
    const res = await fetch(getAPI());
    const data = await res.json();
    setBookings(data);
    setFiltered(data);
    calculateStats(data);
  };

  const calculateStats = (data) => {
    const todayStr = new Date().toISOString().slice(0, 10);
    const total = data.length;
    const verified = data.filter((b) => b.verified === true).length;
    const pending = data.filter((b) => !b.verified).length;
    const today = data.filter((b) => {
      const date = new Date(b.bookedAt);
      return date instanceof Date && !isNaN(date) && date.toISOString().startsWith(todayStr);
    }).length;
    setStats({ total, verified, pending, today });
  };

  useEffect(() => {
    fetchBookings();
  }, [type]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearch(term);
    const filteredData = bookings.filter(
      (b) =>
        b.name.toLowerCase().includes(term) ||
        b.email.toLowerCase().includes(term)
    );
    setFiltered(filteredData);
    calculateStats(filteredData);
  };

  const downloadCSV = () => {
    const headers = ["Name", "Phone", "Email"];
    if (type === "package") headers.push("Package");
    headers.push("Verified", "Booked At");

    const rows = [
      headers,
      ...filtered.map((b) => {
        const base = [b.name, b.phone, b.email];
        if (type === "package") base.push(b.package);
        base.push(b.verified ? "Yes" : "No", new Date(b.bookedAt).toLocaleString());
        return base;
      }),
    ];

    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${type}-bookings.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const deleteSelectedBookings = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete selected bookings?");
    if (!confirmDelete) return;

    const res = await fetch(getDeleteAPI(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: selected, type }), //original => ids: selected,
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Deleted selected bookings.");
      setSelected([]);
      fetchBookings();
    } else {
      alert("❌ Failed to delete. Try again.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Segoe UI, sans-serif" }}>
      {/* HEADER */}
      <div style={{ backgroundColor: "#1B1042", color: "white", padding: "1rem", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>📊 Admin Dashboard</h1>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>Manage all booking requests</p>
      </div>

      {/* TYPE SWITCH */}
      <div style={{ marginTop: "1rem" }}>
        <label style={{ fontWeight: "bold", marginRight: "1rem" }}>Select Booking Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "6px",
            fontWeight: "bold",
            backgroundColor: "#f0f0f0",
          }}
        >
          <option value="demo">🎓 Demo Bookings</option>
          <option value="package">📦 Package Bookings</option>
        </select>
      </div>

      {/* STATS */}
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0", flexWrap: "wrap" }}>
        <div className="card">📦 Total Bookings: {stats.total}</div>
        <div className="card">✅ Verified: {stats.verified}</div>
        <div className="card">⏳ Pending: {stats.pending}</div>
        <div className="card">📅 Today: {stats.today}</div>
      </div>

      {/* CONTROLS */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <input
          value={search}
          onChange={handleSearch}
          placeholder="Search by name or email"
          style={{ padding: "0.5rem", width: "300px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <button onClick={fetchBookings} style={btnStyle("#1B1042", "white")}>🔄 Refresh</button>
        <button onClick={downloadCSV} style={btnStyle("#ffc107", "#000")}>📥 Export CSV</button>
        {selected.length > 0 && (
          <button onClick={deleteSelectedBookings} style={btnStyle("red", "white")}>
            🗑️ Delete Selected ({selected.length})
          </button>
        )}
      </div>

      {/* TABLE */}
      <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <thead>
          <tr style={{ backgroundColor: "#332175ff", color: "white" }}>
            <th style={cellStyle}>
              <input
                type="checkbox"
                checked={filtered.length > 0 && selected.length === filtered.length}
                onChange={(e) => {
                  setSelected(e.target.checked ? filtered.map((b) => b._id) : []);
                }}
              />
            </th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Phone</th>
            <th style={cellStyle}>Email</th>
            {type === "package" && <th style={cellStyle}>Package</th>}
            <th style={cellStyle}>Verified</th>
            <th style={cellStyle}>Booked At</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((b) => (
            <tr key={b._id}>
              <td style={cellStyle}>
                <input
                  type="checkbox"
                  checked={selected.includes(b._id)}
                  onChange={(e) => {
                    setSelected(
                      e.target.checked
                        ? [...selected, b._id]
                        : selected.filter((id) => id !== b._id)
                    );
                  }}
                />
              </td>
              <td style={cellStyle}>{b.name}</td>
              <td style={cellStyle}>{b.phone}</td>
              <td style={cellStyle}>{b.email}</td>
              {type === "package" && <td style={cellStyle}>{b.package}</td>}
              <td style={cellStyle}>{b.verified ? "✅" : "⏳"}</td>
              <td style={cellStyle}>
                {b.bookedAt ? new Date(b.bookedAt).toLocaleString() : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .card {
          background-color: #f7f9ff;
          border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 8px;
          min-width: 200px;
          font-weight: bold;
          color: #1b1042;
        }
      `}</style>
    </div>
  );
}

const btnStyle = (bg, color) => ({
  padding: "0.5rem 1rem",
  backgroundColor: bg,
  color,
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});
