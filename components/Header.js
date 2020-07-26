import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [hamburger, setHamburger] = useState(true);
  const router = useRouter();

  function toggleHamburger() {
    setHamburger((prevMode) => !prevMode);
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            <a>LOGO</a>
          </Link>
        </div>
        <div className="hamburger">
          <button onClick={toggleHamburger}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <div className={hamburger ? "nav-links" : "nav-links open-hamburger"}>
          <ul>
            <button className="close-hamburger" onClick={toggleHamburger}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <li>
              <Link href="/">
                <a className={router.pathname === "/" ? "active-page" : ""}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={router.pathname === "/about" ? "active-page" : ""}
                >
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/practice">
                <a
                  className={
                    router.pathname === "/practice" ? "active-page" : ""
                  }
                >
                  Practice Areas
                </a>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <a className={router.pathname === "/team" ? "active-page" : ""}>
                  Our Team
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={
                    router.pathname === "/contact" ? "active-page" : ""
                  }
                >
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        header {
          padding: 20px 0;
        }

        .logo {
          font-size: 20px;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: auto;
          width: 85%;
        }

        .nav-links {
          background: #f2f7f5;
          position: fixed;
          top: 0;
          right: 0;
          width: 200px;
          height: 100vh;
          margin-right: -220px;
          transition: ease-in 0.7s;
          z-index: 1;
        }

        .nav-links.open-hamburger {
          margin-right: 0px;
          transition: ease-in 0.7s;
        }

        .hamburger button {
          border: none;
          background: none;
        }

        i {
          font-size: 25px;
        }

        .close-hamburger {
          margin-top: 30px;
          border: none;
          background: none;
        }

        nav ul {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        nav ul li {
          margin-top: 50px;
        }

        nav ul li a {
          color: #475d5b;
        }
        /* 
        .nav-links ul li a:hover {
          color: #00473e;
          transition: ease-in 0.3s;
          border-bottom: 1px solid #00473e;
        } */

        nav ul li:last-child {
          background: #faae2b;
          border-radius: 10px;
          padding: 10px;
        }

        @media only screen and (min-width: 1000px) {
          .active-page {
            border-bottom: 1px solid #00473e;
          }
          nav {
            align-items: baseline;
          }

          .logo {
            font-size: 30px;
          }

          .nav-links {
            background: #f2f7f5;
            position: static;
            border: none;
            width: 400px;
            height: 0;
            margin-right: 0px;
          }
          .nav-links ul {
            background: none;
          }

          .hamburger {
            display: none;
          }

          .close-hamburger {
            display: none;
            margin-top: 0px;
          }

          nav ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 450px;
          }

          nav ul li {
            margin-top: 0px;
          }
        }

        @media only screen and (min-width: 1200px) {
          .logo {
            font-size: 35px;
          }

          .nav-links {
            width: 500px;
          }

          nav ul {
            width: 500px;
          }
        }

        @media only screen and (min-width: 2000px) {
          nav {
            width: 70%;
          }
          .logo {
            font-size: 45px;
          }
          nav ul {
            width: 600px;
          }
          nav ul li a {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
