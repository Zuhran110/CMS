import Navbar from "../components/layout/navbar.component";
import FaqContent from "../components/ContentManager/faq/Faq";

const Faq = () => {
  return (
    <div className="cms-admin-page">
      <Navbar title="FAQ" />
      <main className="cms-admin-main">
        <FaqContent />
      </main>
    </div>
  );
};

export default Faq;
