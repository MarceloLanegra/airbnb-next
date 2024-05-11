import Image from "next/image";
import Navbar from "./_components/navbar/Navbar";
import Modal from "./_components/modals/Modal";

export default function Home() {
  return (
    <>
      <Modal isOpen/>
      <Navbar />
    </>
  );
}
