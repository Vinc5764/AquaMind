import { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';

import DashboardNavbar from '@/components/dashboard/DashboardNavbar';

export const metadata: Metadata = {
  title: 'Acquamind',
  description:
    'A water Quality Detection System',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <DashboardNavbar />

        <section className="flex min-h-screen flex-1 flex-col bg-white px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
