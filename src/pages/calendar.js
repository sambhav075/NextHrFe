import { SessionProvider } from 'next-auth/react';
import GoogleCalendar from '@/components/GoogleCalender';

export default function CalendarPage() {
  return (
    <SessionProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-black font-bold mb-6">Calendar Integration</h1>
        <GoogleCalendar />
      </div>
    </SessionProvider>
  );
}