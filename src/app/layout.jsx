import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
            <link href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <body>{children}</body>
    </html>
  );
}
