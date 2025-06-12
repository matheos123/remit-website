import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext'; 
import Header from '@/components/Common/Header/page'; 
import Footer from '@/components/Common/Footer/page'; 

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default MainLayout;