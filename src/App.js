import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import SpecialMenu from "./container/Menu/SpecialMenu";
import Chef from "./container/Chef/Chef";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import Gallery from "./container/Gallery/Gallery";
import FindUs from "./container/Findus/FindUs";
import Footer from "./container/Footer/Footer";
import Scroll from "./Scroll";
import ScrollToTop from "./ScrollToTop";
import CookieConsent from "react-cookie-consent";

const App = () => (
  <>
    <Scroll />
    <ScrollToTop />
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    <CookieConsent
      debug={true}
      location="bottom"
      style={{
        background: "#333",
        textAlign: "left",
        paddingBottom: "1rem",
        fontSize: "16px",
        fontFamily: "Gideon Roman",
      }}
      buttonStyle={{
        color: "#333",
        background: "#fff",
        fontSize: "18px",
        fontFamily: "Gideon Roman",
        marginRight: "1rem",
      }}
      buttonText="OK, rozumiem"
      expires={365}
    >
      "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
      Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
      indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
      dotyczących cookies oznacza, że będą one zamieszczane w Państwa urządzeniu
      końcowym. Możecie Państwo dokonać w każdym czasie zmiany ustawień
      dotyczących cookies."
    </CookieConsent>
  </>
);

export default App;
