import BuyService from "../components/ContentManager/buyService/BuyService";
import Navbar from "../components/layout/navbar.component";

const BuyServicePage = () => {
  return (
    <div className="cms-admin-page">
      <Navbar title="Buy Service" />
      <main className="cms-admin-main">
        <BuyService />
      </main>
    </div>
  );
};

export default BuyServicePage;
