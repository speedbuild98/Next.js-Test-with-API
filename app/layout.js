import Navigation from "@/componentes/Navigation";
import "./globals.scss";

export const metadata = {
  title: "Next.js Test APP",
  description: "Testings Next.js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
