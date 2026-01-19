export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <main>
        <body>{children}</body>
      </main>
    </html>
  )
}