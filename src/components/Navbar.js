import React, {useState} from "react";
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <>
         <nav className="main-nav">
             {/*Logo*/}
             <div className="logo">
                 <h2>
                     <span>T</span>ravel
                     <span>OS</span>
                 </h2>
             </div>
             {/*menu middle*/}
             <div className={
                 showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
             }>
                 <ul>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/about">AboutUS</Link>
                     </li>
                     <li>
                         <Link href="">ContactUS</Link>
                     </li>
                     <li>
                         <Link href="">Bot</Link>
                     </li>
                 </ul>
             </div>

             {/*3rd social media links*/}

                 <div className="social-media">
                     <ul className="social-media-desktop">

                         <li><a href="https://www.youth-hostel.si/en/travelogues/LK?linksubid=PPC-ANG_Travel&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pAJkOzyXRXPL9VqLDi948x4hdrxnreGgjL9vroydt3aT6GQxLtGbqxoCkiAQAvD_BwE"
                         target="_thapa">
                             <FaFacebookSquare classname="facebook"/>
                         </a></li>

                         <li><a href="https://www.youth-hostel.si/en/travelogues/LK?linksubid=PPC-ANG_Travel&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pAJkOzyXRXPL9VqLDi948x4hdrxnreGgjL9vroydt3aT6GQxLtGbqxoCkiAQAvD_BwE"
                                target="_thapa">
                             <FaInstagramSquare classname="instagram"/>
                         </a></li>

                         <li><a href="https://www.youth-hostel.si/en/travelogues/LK?linksubid=PPC-ANG_Travel&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pAJkOzyXRXPL9VqLDi948x4hdrxnreGgjL9vroydt3aT6GQxLtGbqxoCkiAQAvD_BwE"
                                target="_thapa">
                             <FaYoutubeSquare classname="youtube"/>
                         </a></li>
                     </ul>

                     {/* hamburget menu start  */}
                     <div className="hamburger-menu">
                         <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                             <GiHamburgerMenu />
                         </a>
                     </div>
                 </div>
         </nav>


        </>
    );

};

export default Navbar;
