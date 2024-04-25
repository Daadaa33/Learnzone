import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import { useEffect, useState } from "react";

const App = () => {
    const [hasShadow, setHasShadow] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 2) {
              setHasShadow(true);
            } else {
              setHasShadow(false);
            }
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, [])
  return (
    <div className="w-full h-full relative gap-10">
      {/* Header  */}
      <div className={`fixed w-full bg-white  z-50 ${hasShadow ? " dark shadow" : ""}`}>
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App