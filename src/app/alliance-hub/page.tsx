import { Metadata } from 'next';
import AllianceHubClient from '@/app/alliance-hub/AllianceHubClient';

export const metadata: Metadata = {
  title: 'Alliance Hub | NetNova Technologies',
  description: 'Find the perfect placement support plan for your goals.',
};

export default function AllianceHubPage() {
  return <AllianceHubClient />;
}
