import Navbar from "../components/layout/navbar.component";
import AboutUS from "../components/ContentManager/aboutUS/AboutUS";

const AboutUs = () => {
  return (
    <div className="cms-admin-page">
      <Navbar title="About Us" />
      <main className="cms-admin-main">
        <AboutUS />
      </main>
    </div>
  );
};

export default AboutUs;
