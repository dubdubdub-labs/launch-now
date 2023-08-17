import './globals.css'

export const metadata = {
  title: 'Page Title',
  description: 'Page description.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
