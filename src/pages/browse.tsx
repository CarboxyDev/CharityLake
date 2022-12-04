import CharityCard from "../components/Browse/CharityCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className="pl-20 pt-20">
        <div>
          <h1 className="font-eudoxus text-3xl font-bold text-dark">
            Recommended charities for you
          </h1>
        </div>
        <div className="pt-16"></div>
        <div className="flex flex-row flex-wrap space-x-10 space-x-10">
          <CharityCard
            image="/the-small-world.webp"
            charity="The Small World"
            mission="The Small World's mission is to empower girls, women and communities in the Himalayan regions of Nepal."
            link="/charity/the-small-world"
          />
          <CharityCard
            image="/the-small-world.webp"
            charity="The Small World"
            mission="The Small World's mission is to empower girls, women and communities in the Himalayan regions of Nepal."
            link="/charity/the-small-world"
          />
          <CharityCard
            image="/the-small-world.webp"
            charity="The Small World"
            mission="The Small World's mission is to empower girls, women and communities in the Himalayan regions of Nepal."
            link="/charity/the-small-world"
          />
          <CharityCard
            image="/the-small-world.webp"
            charity="The Small World"
            mission="The Small World's mission is to empower girls, women and communities in the Himalayan regions of Nepal."
            link="/charity/the-small-world"
          />
        </div>
      </div>
      <div className="h-[200px]"></div>
      <Footer />
    </>
  );
};

export default Browse;
