import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar"; 
import HomeSection from "../components/Home";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar /> 
      <HomeSection />
      <Gallery />
    </>
  );
}
