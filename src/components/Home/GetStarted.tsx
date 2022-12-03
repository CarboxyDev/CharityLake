import Link from "next/link";

const GetStarted = () => {
  return (
    <>
      <div>
        <h1
          id="get-started"
          className="text-6xl text-gradient font-bold  text-center"
        >
          Get Started
        </h1>
        <div className="h-[200px]"></div>
        <div className="flex flex-row space-x-24 px-16">
          <div className="flex-1 min-h-[200px]">
            <h1 className="text-4xl font-bold font-eudoxus text-[#7B92B2] text-center">
              For donors
            </h1>
            <div className="pt-16 pb-8">
              <p className="text-[#777f82] text-[19px] font-inter text-center">
                If you like the concept of this web3 powered fundrasing
                platform, you may look for charities to donate to. Click the
                button below to view some charities which you might like.
              </p>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col items-center w-full">
                <Link href="/charity/the-small-world">
                  <span className="btn btn-primary font-inter text-white normal-case rounded-md">
                    Look for Charities
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 ßmin-h-[200px]">
            <h1 className="text-4xl font-bold font-eudoxus text-[#7B92B2] text-center">
              For beneficiaries
            </h1>
            <div className="pt-16 pb-8">
              <p className="text-[#777f82] text-[19px] font-inter text-center">
                We know that life can sometimes be hard for a lot of people. We
                make sure that anyone can recieve donations for support. A bank
                account is not needed to receive donations on this platform
                which makes it usable by everyone as long as they own a smart
                device.
              </p>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col items-center w-full">
                <span className="btn btn-primary font-inter text-white normal-case rounded-md">
                  Become a Beneficiary
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
