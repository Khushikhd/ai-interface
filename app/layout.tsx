// app/layout.tsx
import './globals.css';

export const metadata = {
  title: "AI UI",
  description: "Your AI interface project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        {children}
      </body>
    </html>
  );
}
