import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-component">
      <section className="footer">
        <div className="footer-wrap">
          <div className="footer-quicklinks">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>{" "}
              </li>
              <li>
                <Link href="/practice">
                  <a>Practice Areas</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a>Meet Our Team</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-Contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <i
                  className="fa fa-location-arrow footer-icon"
                  aria-hidden="true"
                ></i>
                <div>Ibadan, Oyo State, Nigeria</div>
              </li>
              <li>
                {" "}
                <i className="fa fa-phone footer-icon" aria-hidden="true"></i>
                <div>0701-235-4756</div>
              </li>
              <li>
                <i
                  className="fa fa-envelope footer-icon"
                  aria-hidden="true"
                ></i>
                <div>email@example.com</div>
              </li>
            </ul>
            <div className="footer-contact-socials">
              <ul>
                <li>
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                </li>
                <li>
                  {" "}
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-services">
            <h3>Practice Areas</h3>
            <ul>
              <li>Litigation</li>
              <li>Tax Advisory</li>
              <li>Dispute Resolution</li>
              <li>Corporate and Commercial Practice</li>
            </ul>
          </div>
        </div>
        <div className="footer-attribution">
          <div>
            {" "}
            &copy; Law Firm, {new Date().getFullYear()}. Designed by{" "}
            <a href="https://segunos.tk">SegunOS</a>{" "}
          </div>
        </div>
      </section>

      {/* #### CSS IN JSX STYLES  #### */}

      <style jsx>{`
        .footer {
          background: #181b21;
          color: white;
        }
        .footer-attribution {
          text-align: center;
          font-size: 13px;
        }

        .footer-attribution a {
          color: blue;
          cursor: pointer;
        }

        .footer-wrap {
          display: grid;
          display: -moz-grid;
          display: -ms-grid;
          grid-template-columns: 1fr 1fr;
          margin: auto;
          width: 90%;
          padding: 20px 0;
        }

        .footer-wrap h3 {
          color: #faae2b;
          font-size: 1.1rem;
        }
        .footer-wrap a {
          color: black;
        }

        .footer-quicklinks ul li a {
          color: white;
        }

        .footer-Contact ul li {
          display: flex;
        }
        .footer-Contact ul li div {
          margin-top: -1px;
        }
        .footer-contact-socials ul {
          display: flex;
          display: -ms-flexbox;
          display: -webkit-flex;
          margin-left: -5px;
        }

        .footer-Contact .footer-icon {
          margin-right: 9px;
          display: none;
        }

        .footer-contact-socials ul li {
          margin-top: -10px;
          margin-left: 5px;
          font-size: 0.9rem;
        }

        .footer-attribution {
          padding-bottom: 10px;
        }

        .footer ul li {
          font-size: 0.9rem;
        }

        @media only screen and (min-width: 760px) {
          .footer-attribution a {
            padding: 10px 0;
          }

          .footer-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            padding-top: 100px;
          }

          .footer-Contact {
            margin: 0 100px;
            margin-top: -10px;
          }
        }

        @media only screen and (min-width: 1020px) {
          .footer-attribution {
            font-size: 1.1rem;
            padding: 15px 0;
          }
          .footer ul li {
            font-size: 1.1rem;
          }

          .footer-Contact {
            margin: 0 180px;
            margin-top: -20px;
          }

          .footer-wrap {
            line-height: 1.5;
          }
        }

        @media only screen and (min-width: 1400px) {
          .footer-Contact {
            margin: 0 280px;
          }
        }

        @media only screen and (min-width: 2500px) {
          .footer-Contact {
            margin: 0 320px;
            font-size: 1, 1rem;
          }

          .footer-wrap h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
