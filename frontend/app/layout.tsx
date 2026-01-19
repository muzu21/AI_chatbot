import "./globals.css";

export const metadata = {
  title: "ClipGen",
  description: "Turn long YouTube videos into viral-ready clips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
