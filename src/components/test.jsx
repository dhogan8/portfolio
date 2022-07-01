import { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";

const items = new Array(2).fill(0);

export default function App() {
  const sectionRefs = [
    useRef(null),
    useRef(null),
  ];
  return (
    <div className="App">
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div>
            <ul
              style={{ position: 'fixed', top: 0, right: 0 }}
            >
              {items.map((_, i) => (
                <li
                  key={i}
                  className={
                    currentElementIndexInViewport === i ? "active" : ""
                  }
                >
                  <a
                    href={`#section-${i}`}
                    style={{
                      color:
                        currentElementIndexInViewport === i ? "#f00" : "#222"
                    }}
                  >
                    section-{i}
                  </a>
                </li>
              ))}
            </ul>
            <div >
              {items.map((_, i) => (
                <div
                  id={`section-${i}`}
                  key={i}
                  ref={sectionRefs[i]}
                  className={
                    currentElementIndexInViewport === i ? "active" : ""
                  }
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "500px",
                    backgroundColor: `#${i}${i}${i}`,
                    color: "#fff",
                    fontSize: "2rem"
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        )}
      </Scrollspy>
    </div>
  );
}


// import React, { useRef } from 'react';
// import { Scrollspy } from '@makotot/ghostui';
// import classNames from 'classnames';

// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Footer from '../components/Footer';
// import Intro from '../pages/Intro';
// import Navbar from '../components/Navbar';

// import styles from './Layout.module.scss';

// const Layout = () => {
//   const sectionRefs = [
//     useRef(null),
//     useRef(null),
//   ];

//   return (
//       <Scrollspy sectionRefs={sectionRefs}>
//         {({ currentViewport }) => {
//           <>
//             <nav id='nav' className={styles.nav}>
//               <div id='logo' className={styles.logo}>
//                 <span>dallas</span>
//               </div>
//               <div className={styles.list}>
//                 <span
//                   className={classNames(
//                     styles.item,
//                     {
//                       [styles['item__active']]: currentViewport === 'about' ? 'active' : '',
//                     },
//                   )}
//                 >
//                   <a href='#about'>About</a>
//                 </span>
//                 <span
//                   className={classNames(
//                     styles.item,
//                     {
//                       [styles['item__active']]: currentViewport === 'contact' ? 'active' : '',
//                     },
//                   )}
//                 >
//                   <a href='#contact'>Contact</a>
//                 </span>
//               </div>
//             </nav>
//             <Intro />
//             <About ref={sectionRefs[0]}/>
//             <Contact ref={sectionRefs[0]}/>
//             <Footer />
//           </>
//         }}
//       </Scrollspy>
//   )
// }

// export default Layout;

