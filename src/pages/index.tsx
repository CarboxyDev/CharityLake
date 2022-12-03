import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>CharityLake</title>
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
