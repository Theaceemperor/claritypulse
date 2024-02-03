import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "./components/reuseable";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clarity Pulse",
  description: "Blog website module developed by spadeshub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200 dark:bg-black text-secondary dark:text-primary`}>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
