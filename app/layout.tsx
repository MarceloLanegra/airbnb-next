import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import ToasterProvider from "./providers/ToasterProvider"
import RentModal from "./_components/modals/RentModal"
import LoginModal from "./_components/modals/LoginModal"
import RegisterModal from "./_components/modals/RegisterModal"
import Navbar from "./_components/navbar/Navbar"
import getCurrentUser from "./actions/getCurrentUser"

const font = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  )
}
