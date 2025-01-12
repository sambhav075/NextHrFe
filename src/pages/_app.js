import "@/styles/globals.css";
import Header from "@/components/Header"; // Correct path for your Header component

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
