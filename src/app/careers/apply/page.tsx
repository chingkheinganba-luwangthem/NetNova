import { Metadata } from 'next';
import ApplyClient from './ApplyClient';

export const metadata: Metadata = {
  title: 'Apply | NetNova Technologies',
  description: 'Submit your application for a role at NetNova Technologies.',
};

export default function ApplyPage() {
  return <ApplyClient />;
}
