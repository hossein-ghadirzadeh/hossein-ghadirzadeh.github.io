import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hossein Ghadirzadeh",
  description: "I am A full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins">{children}</body>
    </html>
  );
}
