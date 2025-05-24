// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { slogo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={slogo} alt='logo' className='w-9 h-9 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             Samrat &nbsp;
//             <span className='sm:block hidden'></span> 
//             {/* changes made in above line*/}
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { slogo, menu, close } from "../assets";

import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";  // <-- import icons

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo & Name */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={slogo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Samrat &nbsp;
            <span className='sm:block hidden'></span>
          </p>
        </Link>

        {/* Nav Links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Social Icons - Desktop */}
        <div className='hidden sm:flex flex-row gap-6 items-center'>
          <a
            href='https://www.linkedin.com/in/-samrat-dutta/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary hover:text-white text-2xl'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://www.instagram.com/samrat_dutta31/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary hover:text-white text-2xl'
            aria-label='Instagram'
          >
            <FaInstagram />
          </a>
          <a
            href='https://github.com/CodingEnthus'
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary hover:text-white text-2xl'
            aria-label='GitHub'
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile menu toggle and dropdown */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            {/* Social Icons - Mobile */}
            <div className='mt-4 flex flex-row justify-center gap-6'>
              <a
                href='https://www.linkedin.com/in/-samrat-dutta/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-white text-xl'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://www.instagram.com/samrat_dutta31/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-white text-xl'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
              <a
                href='https://github.com/CodingEnthus'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary hover:text-white text-xl'
                aria-label='GitHub'
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
