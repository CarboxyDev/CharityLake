import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import LatestDonationCompact from "../../components/Charity/LatestDonationCompact";
import DonationMessage from "../../components/Charity/DonationMessage";

const NewyorkAnnualCampaign = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[50px]"></div>
      <div className="flex min-h-screen flex-row space-x-20 px-16">
        <div className="basis-2/3">
          <div className="h-full w-full px-2 py-4">
            <h1 className="pb-8 font-eudoxus text-4xl font-bold text-[#25353d]">
              <span className="text-gradient"></span> New York Annual Campaign
              2023
            </h1>
            <img
              src="/newyork-annual-campaign.webp"
              alt="Newyork Annual Campaign.webp"
              className="w-full rounded-md"
            />
            <div className="h-[50px]"></div>
            <span className="text-gradient font-eudoxus text-3xl font-bold text-[#25353d]">
              Our Mission
            </span>
            <div className="h-[35px]"></div>
            <div className="font-inter text-[#646b6e]">
              The 111th annual campaign of The New York Times Neediest Cases
              Fund kicks off in September 2022 and runs through the end of the
              year. Read about how our beneficiary agencies support those
              struggling in New York and beyond. And make an online donation
              here through CharityLake powered by Polygon and web3. All
              donations will be distributed to our nine beneficiary
              organizations. The New York Times Company underwrites all
              administrative costs incurred by The Fund. To read past articles,
              visit The Neediest Cases Fund page. Recent stories are available
              free to all readers. Please share the ones that resonate the most
              with you.
              <br />
              <br />
              The New York Times Neediest Cases Fund has been recognized by the
              Internal Revenue Service as a not-for-profit public charity under
              Section 501(c)(3) of the Internal Revenue Code. Contributions to
              the Neediest Cases Fund are tax-deductible to the extent permitted
              by law. Federal Identification Number: 13-6066063. A copy of the
              Neediest Cases Fund's latest annual financial report may be
              obtained, upon request, from the Fund or from the New York State
              Attorney General's Charities Bureau, Attn: FOIL Officer, 120
              Broadway, New York, New York 10271.
              <br />
              <br />
              Brooklyn Community Services provides early-childhood and
              after-school education, youth development, child abuse prevention
              services, job training and services for people with mental illness
              and those who are disabled. It has 25 locations throughout
              Brooklyn, including the Brooklyn High School for Leadership and
              Community Service. Money raised through The Neediest Cases Fund
              goes to support one-time needs and service development.
            </div>
            <div className="pt-16">
              <span className="text-gradient font-eudoxus text-3xl font-bold">
                Messages from the Donors
              </span>
              <div className="pb-16"></div>
              <div className="flex flex-col space-y-6">
                <DonationMessage
                  donor="Matthew Nash"
                  amount="85"
                  message="I like this charity's mission. I have donated."
                ></DonationMessage>
                <DonationMessage
                  donor="Steve Balmer"
                  amount="200"
                  message="I hope world hunger is eradicated. I know the world governments won't take any measures so I'll take them myself."
                ></DonationMessage>
                <DonationMessage
                  donor="Anonymous"
                  amount="25"
                  message="#EradicateWorldHunger"
                ></DonationMessage>
              </div>
            </div>
          </div>
          <div className="h-[40px]"></div>
        </div>
        <div
          id="sidebar-right"
          className="basis-1/3 rounded-md bg-[#fefefe] shadow-lg"
        >
          {" "}
          <div className="h-full w-full px-6 py-8 font-inter">
            <span className="font-lato">
              <span className="text-gradient text-xl font-bold">$2,100</span>
              &nbsp;&nbsp;
              <span className="text-sm text-[#7d8386]">
                raised of $3,000 goal
              </span>
            </span>
            <div className="pt-2"></div>
            <progress
              className="progress progress-success bg-[#E6F6EF]"
              value="70"
              max="100"
            ></progress>
            <div className="pb-2"></div>
            <span className="font-inter text-sm text-gray">
              34 donations raised
            </span>
            <div className="pb-16"></div>
            <Link href="/charity/the-small-world/donate">
              <span className="btn w-full rounded-md border-blue bg-blue text-white hover:btn-primary">
                Donate
              </span>
            </Link>
            <div className="pb-4"></div>
            <span className="btn w-full rounded-md border-bluegray bg-bluegray text-white">
              Share Charity
            </span>
            <div className="pb-16"></div>
            <div>
              <span className="text-xl font-bold text-dark">
                Latest Donations
              </span>
              <div className="flex flex-col items-center space-y-5 pt-10">
                <LatestDonationCompact donor="Aditya" amount="75" />
                <LatestDonationCompact donor="Anonymous" amount="69" />
                <LatestDonationCompact donor="Martin" amount="5" />
                <LatestDonationCompact donor="Lewis" amount="15" />
                <LatestDonationCompact donor="devox123" amount="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[150px]"></div>
      <Footer></Footer>
    </div>
  );
};

export default NewyorkAnnualCampaign;
