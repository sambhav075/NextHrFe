import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import axios from 'axios';

const GoogleCalendar = () => {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      if (session?.accessToken) {
        setLoading(true);
        try {
          const response = await axios.get('/api/calendar/events');
          setEvents(response.data.events);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchEvents();
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn('google')}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Sign in with Google
      </button>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Calendar Events</h2>
      {loading ? (
        <div>Loading events...</div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="border p-4 rounded-lg">
              <h3 className="font-semibold">{event.summary}</h3>
              <p className="text-gray-600">
                {new Date(event.start.dateTime || event.start.date).toLocaleString()}
              </p>
              {event.description && (
                <p className="text-sm mt-2">{event.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoogleCalendar;