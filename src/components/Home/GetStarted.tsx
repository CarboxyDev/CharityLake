import Link from "next/link";

const GetStarted = () => {
  return (
    <>
      <div>
        <h1
          id="get-started"
          className="text-gradient text-center text-6xl  font-bold"
        >
          Get Started
        </h1>
        <div className="h-[125px]"></div>
        <div className="flex flex-row space-x-24 px-16">
          <div className="min-h-[200px] flex-1">
            <h1 className="text-center font-eudoxus text-4xl font-bold text-bluegray">
              For donors
            </h1>
            <div className="pt-16 pb-8">
              <p className="text-center font-inter text-[19px] text-gray">
                If you like the concept of this web3 powered fundrasing
                platform, you may look for charities to donate to. Click the
                button below to view some charities which you might like.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-col items-center">
                <Link href="/charity/the-small-world">
                  <span className="btn rounded-md border-blue bg-blue font-inter normal-case text-white">
                    Look for Charities
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="ßmin-h-[200px] flex-1">
            <h1 className="text-center font-eudoxus text-4xl font-bold text-bluegray">
              For beneficiaries
            </h1>
            <div className="pt-16 pb-8">
              <p className="text-center font-inter text-[19px] text-gray">
                We know that life can sometimes be hard for a lot of people. We
                make sure that anyone can recieve donations for support. A bank
                account is not needed to receive donations on this platform
                which makes it usable by everyone as long as they own a smart
                device.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-col items-center">
                <span className="btn rounded-md border-blue bg-blue font-inter normal-case text-white">
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
