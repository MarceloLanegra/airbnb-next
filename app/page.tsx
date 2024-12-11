import Navbar from "./_components/navbar/Navbar"
import RegisterModal from "./_components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./_components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"

export default async function Home() {
  const currentUser = await getCurrentUser()
  return (
    <>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <Navbar currentUser={currentUser}/>
    </>
  )
}
