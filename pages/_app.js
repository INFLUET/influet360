// pages/_app.js
import "@/public/style.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          height: 100%;
        }

        body {
          height: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        main {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}