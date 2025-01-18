'use client';

import { useAuth } from "@/context/authContext";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);  // Track the loading state

  useEffect(() => {
    if (!user) {
      router.push('/signIn');  // Redirect to sign-in page if not authenticated
    } else {
      setLoading(false);  // Once user is authenticated, stop loading
    }
  }, [router, user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* Optionally, display a spinner or loading message */}
      </div>
    );
  }

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
