import Navbar from "../components/layout/navbar.component";
import Servicess from "../components/ContentManager/servicess/Services";

const Services = () => {
  return (
    <div className="cms-admin-page">
      <Navbar title="Services" />
      <main className="cms-admin-main">
        <Servicess />
      </main>
    </div>
  );
};

export default Services;
