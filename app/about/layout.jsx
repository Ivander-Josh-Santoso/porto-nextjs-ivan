import Footer from '@/components/Footer';

export const metadata = {
  title: 'IvanderJS | About',
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
