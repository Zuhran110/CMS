import BuyService from "../components/ContentManager/buyService/BuyService";
import Navbar from "../components/layout/navbar.component";

const BuyServicePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar title="Buy Service" />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <BuyService />
      </main>
    </div>
  );
};

export default BuyServicePage;
