export const metadata = {
  title: 'Eventure',
  description: 'Plan your dream event today with Eventure!',
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}