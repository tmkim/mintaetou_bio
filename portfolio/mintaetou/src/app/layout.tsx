import '@/app/globals.css';
import { inter } from '@/app/ui/dankbank/fonts';
import { AuthProvider } from "@/context/AuthContext";
import Navbar from '@/app/ui/navbar';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
        <div className="flex h-screen flex-col bg-gray-100 overflow-y-auto">
          <div className="w-full flex-none sticky top-0">
            <Navbar />
          </div>
          <Suspense>
            {/* {children} */}
            <div className="">{children}</div>
            <div className="text-center py-6 bg-green-700 text-white">
              <p>&copy; 2025 Tae-Min Kim. All rights reserved.</p>
            </div>
          </Suspense>
        </div>
        </AuthProvider>

      </body>
    </html>
  );
}
