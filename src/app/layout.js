import { AuthProvider } from "./context/checkAuthenticate";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
