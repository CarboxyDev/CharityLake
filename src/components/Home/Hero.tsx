import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="hero-image.jpg"
            className="max-w-sm rounded-lg shadow-2xl hidden lg:flex"
          />
          <div className="flex flex-row">
            <div className="flex-1">
              <h1 className="text-5xl text-[#25353d] font-bold font-eudoxus pb-2">
                The decentralized way to charity
              </h1>
              <p className="py-6 text-[#969fa3] text-xl font-inter">
                CharityLake leverages web3 technologies to provide a
                decentralized way of fundraising for charities.
              </p>
              <div className="pt-4">
                <Link href="#get-started" scroll={false}>
                  <button className="btn btn-primary btn-lg text-white rounded-xl normal-case">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
