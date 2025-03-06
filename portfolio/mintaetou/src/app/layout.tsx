import '@/app/globals.css';
import { inter } from '@/app/ui/dankbank/fonts';
import { AuthProvider } from "@/context/AuthContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
        </body>
    </html>
  );
}
