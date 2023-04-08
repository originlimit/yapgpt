import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex'>
        {/*Sidebar*/}
        {/*ClientProvider (notifs)*/}
        {/*Content*/}
        {children}
      </body>
    </html>
  )
}
