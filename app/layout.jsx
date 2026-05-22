import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space"
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira"
});

export const metadata = {
  title: "Abir Hossen | UI/UX Designer & Developer",
  description: "Portfolio of Abir Hossen, a creative UI/UX designer and full-stack developer specializing in modern, high-performance web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${firaCode.variable} font-sans antialiased bg-space-dark text-white min-h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
