

import { useState } from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();
  const { loginWithEmailAndPassword, loginWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await loginWithEmailAndPassword(formData.email, formData.password);
      router.push('/');
    } catch (err) {
      setError('Failed to sign in. Please check your email and password.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setGoogleLoading(true);

    try {
      await loginWithGoogle();
      router.push('/');
    } catch (err) {
      setError('Google Sign-In failed. Please try again.');
      console.error(err);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <div className="mt-6 text-center">

          <button
            onClick={onGoogleSignIn}
            disabled={googleLoading}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 disabled:bg-red-300"
          >
            {googleLoading ? 'Signing In with Google...' : 'Sign In with Google'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
