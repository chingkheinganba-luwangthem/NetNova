import LockWrapper from './LockWrapper';

export default function AllianceHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LockWrapper>{children}</LockWrapper>;
}
