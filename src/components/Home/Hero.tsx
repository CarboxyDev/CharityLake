import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://via.placeholder.com/300x450"
            className="max-w-sm rounded-lg shadow-2xl hidden lg:flex"
          />
          <div className="flex flex-row">
            <div className="flex-1">
              <h1 className="text-[42px] text-dark font-bold font-eudoxus pb-2 leading-[48px]">
                The decentralized way to charity.
              </h1>
              <p className="mt-6 mb-10 text-gray text-xl">
                CharityLake leverages web3 technologies to provide a
                decentralized way of fundraising for charities around the globe.
              </p>
              <div className="mt-4">
                <Link href="#get-started" scroll={false}>
                  <button className="btn bg-blue border-blue btn-lg text-white rounded-xl normal-case">
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
