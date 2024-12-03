import { SITE_CONFIG } from "@/src/config";
import { cn } from "@/src/lib/utils";
import "@/src/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../contexts/ThemeContext";

const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
          font.className
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
