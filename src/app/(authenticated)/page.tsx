import PageTemplate from '@/components/PageTemplate';
import { userData } from '@/components/SidebarUser/constants';

export default function Home() {
  return <PageTemplate pageTitle={`Hi, ${userData.name}!`} />;
}
