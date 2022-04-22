import { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Province from "../components/Province";
import datap from "../utils/constants/provinces";

function Main() {
  const { provinces } = datap;
  let [ province, setProvince ] = useState(provinces);
  return (
    <main>
      <Hero />
      <Global />
      <Province province={province} setProvince={setProvince} />
      <Form province={province} setProvince={setProvince} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
