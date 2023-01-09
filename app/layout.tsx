import "../styles/globals.css";
import Header from "./Header";
import { Roboto } from "@next/font/google";
import Providers from "./Providers";
// @ts-ignore
const roboto = Roboto({
  weight: "500",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${roboto.className}`}>
      <Providers>
        <body className="bg-zinc-200 dark:bg-primary-1000 transition-all max-w-6xl mx-auto">
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
