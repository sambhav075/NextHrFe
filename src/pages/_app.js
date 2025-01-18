import "@/styles/globals.css";
import Header from "@/components/Header";
import { AuthProvider } from "../context/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>  {/* Ensure this wraps the entire app */}
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Component {...pageProps} />
        </main>
      </div>
    </AuthProvider>
  );
}
