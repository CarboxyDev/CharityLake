import Head from "next/head";
import Footer from "../components/Footer";
import GetStarted from "../components/Home/GetStarted";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Powered from "../components/Home/Powered";
import Navbar from "../components/NavbarHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>CharityLake</title>
      </Head>
      <Navbar />
      <Hero />
      <HowItWorks />
      <div className="h-[150px]"></div>
      <Powered />
      <div className="h-[150px]"></div>
      <GetStarted />
      <div className="h-[250px]"></div>
      <Footer />
    </>
  );
}
