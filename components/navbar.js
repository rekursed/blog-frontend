import styles from "./layout.module.scss";
import Link from "next/link";
import navStyles from "./navbar.module.scss"


class Navbar extends React.Component {

    render() {
        return (
            <div className={`nav-container`}>
                <nav className={"navbar " + navStyles.nav} role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link href={"/"}><a className="navbar-item">
                            <img className={navStyles.favicon} src="/android-chrome-384x384.png"/>
                            <span>Mohammad Rakibul Hassan</span>
                        </a></Link>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navBarLinks">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navBarLinks" className="navbar-menu">
                        <div className={"navbar-end " + navStyles.links}>
                            <Link href={"/about"}><a className="navbar-item">
                                About
                            </a>
                            </Link>
                            <Link href={"/posts"}><a className="navbar-item">
                                Blogs
                            </a></Link>
                            <Link href={"/"}><a className="navbar-item">
                                Contact Me
                            </a></Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

// function Navbar() {
//     return (
//         <nav className="navbar" className={navStyles.nav} role="navigation" aria-label="main navigation">
//             <div className="navbar-brand">
//                 <Link href={"/"}><a className="navbar-item">
//                     <img src="/android-chrome-384x384.png"/>
//                 </a></Link>
//
//                 <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
//                    data-target="navbarBasicExample">
//                     <span aria-hidden="true"></span>
//                     <span aria-hidden="true"></span>
//                     <span aria-hidden="true"></span>
//                 </a>
//             </div>
//
//             <div id="navbarBasicExample" className="navbar-menu">
//                 <div className="navbar-end">
//                     <Link href={"/"}><a className="navbar-item">
//                         About
//                     </a>
//                     </Link>
//                     <Link href={"/posts"}><a className="navbar-item">
//                         Blogs
//                     </a></Link>
//                     <Link href={"/"}><a className="navbar-item">
//                         Contact Me
//                     </a></Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }

export default Navbar
