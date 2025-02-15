import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <div className="w-full mt-12">
        <Footer />
      </div>
    </>
  );
}
