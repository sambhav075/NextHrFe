'use client';
import AccessGrid from "../components/Main";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/authContext";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/signIn'); 
  };

  return (
    <>

        <div className="p-4">

          <p>{user?.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <AccessGrid />
        </div>

    </>
  );
}
