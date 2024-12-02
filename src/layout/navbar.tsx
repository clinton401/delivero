import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/fast-delivery.png";
import { motion, AnimatePresence } from "motion/react";
import { Sling as Hamburger } from "hamburger-react";

const hamBurgerMenuAnimation = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      // delay: 0.5,
      staggerChildren: 0.3,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      //   duration: 0.5,
      //   ease: "easeIn",
    },
  },
};
const bgAnimation ={
  hidden: {
    opacity: 0
  },
visible: {
opacity: 1,
transition: {
    duration: 0.5,
    ease: "easeIn",
}
  }
}
const hamLinks = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 100,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
export const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (isOpen) {
      document.body.style.height = "100dvh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  const modalHandler = () => {
    setOpen(!open);
  };
  const links = [
    { name: "Home", url: "/" },
    { name: "Apply as agent", url: "/apply" },
    { name: "Request Delivery", url: "/request-delivery" },
  ];
  return (
    <header className="w-full flex z-30 items-center bg-background justify-between gap-x-2 gap-y-4 flex-wrap fixed top-0 left-0 py-2 sm:py-4 px-[5%] shadow-md">
      <nav>
        <Link
          to="/"
          className="flex items-center font-cinzel font-semibold text-xl"
        >
          Delivero
          <img src={logo} alt="logo" className="w-[30px] aspect-square " />
        </Link>
      </nav>
      <nav className="hidden  sm:flex">
        <ul className="flex items-center gap-4 ">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className={` relative ${
                    pathname === link.url ? "active" : ""
                  }`}
                  to={link.url}
                >
                  {link.name}
                  <span className="bg-foreground h-1 transition-all duration-300 ease-in absolute top-full rounded-full left-0"></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="flex sm:hidden " id="ham_nav">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          distance="sm"
          rounded
          label="Show menu"
        />
      </nav>
      {/* {isOpen && (
        <div className="fixed bg-black/80 h-dvh w-full z-40 inset-0"></div>
      )} */}
      <AnimatePresence>
        {isOpen && (
          <motion.div variants={bgAnimation} initial="hidden" animate="visible" key="bgModal" className="fixed bg-black/80 z-40 h-dvh w-full  inset-0"></motion.div>
        )}
        </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
           
            <motion.nav
              variants={hamBurgerMenuAnimation}
              animate="visible"
              initial="hidden"
              exit="exit"
              key="hamMenu"
              className=" w-full z-50 h-dvh overflow-x-hidden sm:hidden flex item-center justify-end overflow-y-auto fixed inset-0 "
              onClick={modalHandler}
            >
              <ul className="w-3/4 h-full flex items-center p-4 justify-cen bg-black text-white  flex-col gap-4" onClick={(e: React.MouseEvent<HTMLUListElement>) => e.stopPropagation()}>
                <h2 className="flex items-center font-cinzel font-semibold text-xl">
                  Delivero
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[30px] aspect-square "
                  />
                </h2>
                {links.map((link) => {
                  return (
                    <motion.li
                      variants={hamLinks}
                      key={link.name}
                      className="w-full flex"
                      onClick={modalHandler}
                    >
                      <Link
                        className={` w-full p-2 text-center hover:text-foreground hover:bg-secondary transition-colors duration-300 ease-in  border rounded-md relative ${
                          pathname === link.url ? "bg-white text-black" : ""
                        }`}
                        to={link.url}
                      >
                        {link.name}
                        {/* <span className="bg-foreground h-1 transition-all duration-300 ease-in absolute top-full rounded-full left-0"></span> */}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
