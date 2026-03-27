export const metadata = {
  title: "Deal Hunter",
  description: "Find big product discounts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f7f7f8" }}>
        {children}
      </body>
    </html>
  );
}
