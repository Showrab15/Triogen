import BusinessCycle from "../../components/Investors/BusinessCycle";
import InvestorsHeader from "../../components/Investors/InvestorsHeader";
import Countires from "../../components/Investors/Countires";
import Insights from "../../components/Investors/Insights";
import BecomeInvestors from "../../components/Investors/BecomeInvestors";
import { Helmet } from "react-helmet-async";

const Investors = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Investors || Cocopeat Solutions for a Sustainable Future</title>
        <meta
          property="og:title"
          content="Cocopeat Solutions for a Sustainable Future"
        />
        <meta
          property="og:description"
          content="Explore how our sustainable cocopeat solutions are driving growth and innovation. Join us as an investor to be part of a greener future with NuStartz Cocopeat."
        />
        <meta
          property="og:url"
          content="https://www.triogenexports.com/investors"
        />
        <link rel="canonical" href="https://www.triogenexports.com/investors" />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/Xjw2hM1/triogenblack.png"
        />
      </Helmet>
      <div className="bg-white">
        <InvestorsHeader />
        <div className="py-12 p-6 md:px-20">
          <BusinessCycle />
          <Countires />
          <Insights />
          <BecomeInvestors />
        </div>
      </div>
    </>
  );
};

export default Investors;
