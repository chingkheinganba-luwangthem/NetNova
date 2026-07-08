import { Metadata } from 'next';
import EnrollClient from './EnrollClient';

export const metadata: Metadata = {
  title: 'Enrollment Application | NetNova Technologies',
  description: 'Submit your enrollment application for our placement support plans.',
};

export default function EnrollPage() {
  return <EnrollClient />;
}
