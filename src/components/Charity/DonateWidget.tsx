const DonateWidget = () => {
  return (
    <>
      <div className="pt-4"></div>
      <iframe
        src="https://nowpayments.io/embeds/donation-widget?api_key=0GEWDFX-XN14RSF-K845GP2-JX1ZTEV"
        width="354"
        height="495"
        frameBorder="0"
        scrolling="no"
        className="overflow-y-hidden "
      ></iframe>
      <div className="pb-4"></div>
      <input
        type="text"
        className="form-input rounded-lg px-4 py-3 w-full"
        name=""
      />
      <div className="pb-4"></div>
    </>
  );
};

export default DonateWidget;
