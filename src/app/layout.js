"use client";

import "./globals.css";
import { ModeProvider } from "./Provider"; // Adjust the path based on where your context is stored
import NavBar from "./component/NavBar";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`min-h-screen ${kanit.className} antialiased`}>
        <ModeProvider>
          <PageContent>{children}</PageContent>
        </ModeProvider>
      </body>
    </html>
  );
}

// PageContent component to consume the mode context
import { useMode } from "./Provider";

function PageContent({ children }) {
  const { mode } = useMode();

  return (
    <div className={`${mode ? "lightmode" : "darkmode"} min-h-screen`}>
      <div>
        <NavBar />
      </div>
      <div className="px-6 xl:px-40 pt-24">{children}</div>
    </div>
  );
}
