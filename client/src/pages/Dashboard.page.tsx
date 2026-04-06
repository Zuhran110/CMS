import Navbar from "../components/layout/navbar.component";
import Home from "../components/ContentManager/home/Home";
const DashboardPage = () => {
  return (
    <div className="cms-admin-page">
      <Navbar title="Dashboard" />
      <main className="cms-admin-main">
        <Home />
      </main>
    </div>
  );
};

export default DashboardPage;
