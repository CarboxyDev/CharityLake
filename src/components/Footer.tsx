const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-blue text-primary-content">
        <div>
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="font-bold">
            <span className="text-xl">CharityLake</span>
            <br />
          </p>
          <span>The decentralized way to charity.</span>
          <p className="pb-2">Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
