import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ReactNode } from "react";
import WPB from "./wp-button";


interface LayoutProps {
  children: ReactNode;
  heroBanner?: ReactNode;
}
// https://sites.google.com/d/1IujmEDmwAmsoOF2IMZqx3JSJ9KUik7qF/p/1ABCtffJn3AmETwiSDgv-c8j1D64W50HH/edit

export default function Layout({ children, heroBanner }: LayoutProps) {
  return (
    <main className="min-h-screen relative">
      <WPB />
      <div className="relative">
        <Navigation />
        {heroBanner}
      </div>
      
      {children}
      <Footer />
    </main>
  );
}