export const metadata = {
  title: "سایت من",
  description: "نمونه سایت روی Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
