import Head from "next/head";
import Footer from "../components/Footer";
import GetStarted from "../components/Home/GetStarted";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>CharityLake</title>
      </Head>
      <Navbar />
      <Hero />
      <HowItWorks />
      <GetStarted />
      <div className="h-[250px]"></div>
      <Footer />
    </>
  );
}
