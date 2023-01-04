import "./home.css" 
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="aboutContainer">
          <h1 className="homeTitle">
            "We are committed to providing the highest comfort to our
            customers." - Eri Soyemi
          </h1>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}

export default Home