import { Suspense } from 'react';
import EventOptionsClient from './EventOptionsClient';

export default function TechnicalBookingPage() {
  return (
    <Suspense fallback={<p>Loading booking form...</p>}>
      <EventOptionsClient />
    </Suspense>
  );
}