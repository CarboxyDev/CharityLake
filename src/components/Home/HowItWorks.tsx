const HowItWorks = () => {
  return (
    <>
      <div>
        <h1
          id="how-it-works"
          className="text-6xl text-gradient font-bold  text-center"
        >
          How it works
        </h1>
        <div className="h-[200px]"></div>
        <div className="pl-24">
          <h1 className="text-4xl font-bold font-eudoxus text-[#7B92B2]">
            For donors
          </h1>
        </div>
        <div className="h-[75px]"></div>
        <div className="flex min-h-[300px] flex-row px-24 space-x-14">
          <div className="flex-1">
            <div className="flex h-12 w-12 btn-circle bg-primary justify-center items-center">
              <span className="font-bold text-xl font-inter text-white">1</span>
            </div>
            <div className="pt-8">
              <h1 className="text-2xl font-bold font-eudoxus">
                Explore charities
              </h1>
              <p className="pt-4 text-[#737b7f]">
                Users are recommended with some charities. They can also search
                for a charity of their choice.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex h-12 w-12 btn-circle bg-primary justify-center items-center">
              <span className="font-bold text-xl font-inter text-white">2</span>
            </div>
            <div className="pt-8">
              <h1 className="text-2xl font-bold font-eudoxus">
                Pick a charity
              </h1>
              <p className="pt-4 text-[#737b7f]">
                After exploring the available charities, users can choose a
                charity they like.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex h-12 w-12 btn-circle bg-primary justify-center items-center">
              <span className="font-bold text-xl font-inter text-white">3</span>
            </div>
            <div className="pt-8">
              <h1 className="text-2xl font-bold font-eudoxus">
                Donate using <span className="text-gradient">SOL</span>
              </h1>
              <p className="pt-4 text-[#737b7f]">
                If users like the charity and their statement, the users can
                donate to the charity using SOL.
              </p>
            </div>
          </div>
        </div>

        <div className="h-100px lg:h-[50px]"></div>
        <div className="pl-24">
          <h1 className="text-4xl font-bold font-eudoxus text-[#7B92B2]">
            For beneficiaries
          </h1>
        </div>
        <div className="h-[75px]"></div>
        <div className="flex min-h-[400px] flex-row px-24 space-x-14">
          <div className="flex-1">
            <div className="flex h-12 w-12 btn-circle bg-primary justify-center items-center">
              <span className="font-bold text-xl font-inter text-white">1</span>
            </div>
            <div className="pt-8">
              <h1 className="text-2xl font-bold font-eudoxus">
                Create a charity
              </h1>
              <p className="pt-4 text-[#737b7f]">
                Beneficiaries can create a charity to obtain funds from donors.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex h-12 w-12 btn-circle bg-primary justify-center items-center">
              <span className="font-bold text-xl font-inter text-white">2</span>
            </div>
            <div className="pt-8">
              <h1 className="text-2xl font-bold font-eudoxus">
                Provide a statement
              </h1>
              <p className="pt-4 text-[#737b7f]">
                The Beneficiary should provide a charity statement which would
                help donors decide if the charity is worth donating to.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex h-12 w-12 btn-circle bg-primary justify-center items-center">
              <span className="font-bold text-xl font-inter text-white">3</span>
            </div>
            <div className="pt-8">
              <h1 className="text-2xl font-bold font-eudoxus">
                Obtain crypto payments
              </h1>
              <p className="pt-4 text-[#737b7f]">
                The Beneficiary obtains instant payments to their crypto wallets
                without any hassle. Powered by{" "}
                <span className="font-bold text-gradient">SOL</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
