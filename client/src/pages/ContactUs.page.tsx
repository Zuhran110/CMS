import Navbar from "../components/layout/navbar.component";
import ContactUS from "../components/ContentManager/ContactUS/ContactUS";

const ContactUs = () => {
  return (
    <div className="cms-admin-page">
      <Navbar title="Contact Us" />
      <main className="cms-admin-main">
        <ContactUS />
      </main>
    </div>
  );
};

export default ContactUs;
