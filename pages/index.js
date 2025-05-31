import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="main-buttons">
        <Link href="/alphabet"><button>الحروف الهولندية</button></Link>
        <Link href="/numbers"><button>الأرقام الهولندية</button></Link>
      </div>
    </Layout>
  );
}
