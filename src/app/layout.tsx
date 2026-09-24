import type { Metadata } from "next";
import { Mochiy_Pop_One, M_PLUS_Rounded_1c, Press_Start_2P } from "next/font/google";
import "./globals.css";


const mochiy = Mochiy_Pop_One({
  subsets: ["latin", "japanese"],
  weight: "400",
  variable: "--font-mochiy",
  display: "swap",
});

const mplus = M_PLUS_Rounded_1c({
  subsets: ["latin", "japanese"],
  weight: ["400", "500", "700"],
  variable: "--font-mplus",
  display: "swap",
});

const pixel2p = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel-2p",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Jacquelin Jantman· Fullstack Developer",
  description: "Portfolio de proyectos web.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${mochiy.variable} ${mplus.variable} ${pixel2p.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
