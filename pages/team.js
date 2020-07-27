import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Quickcontact from "../components/Quickcontact";

export default function Team() {
  return (
    <Layout>
      <Head>
        <title>The Team | Law Firm</title>
      </Head>
      <main className="team-header">
        <div className="team-header-wrap">
          <h3>A Team of Seasoned Professionals</h3>
        </div>
      </main>

      <section className="team">
        <div className="team-wrap">
          <div className="team-member">
            <img src="/home-about.jpg" alt="team member" />
            <h5>Barr. Segun Os </h5>
            <aside className="team-member-contact">
              <h6>
                <a href="mailto:webmaster@example.com">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} color="#475d5b" />
                </a>
              </h6>
              <h6>
                <FontAwesomeIcon icon={faPhone} color="#475d5b" /> - 0812348745
              </h6>
            </aside>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur corrupti minima tenetur quis veniam aliquid odio,
              autem earum. Quis vero, quasi error fugit eaque, quam nihil
              exercitationem laboriosam molestiae harum voluptas delectus
              architecto enim non recusandae. Labore necessitatibus provident
              ullam, praesentium quisquam optio perspiciatis architecto
              accusantium, ut ducimus asperiores impedit.
            </p>
          </div>

          <div className="team-member">
            <img src="/home-about.jpg" alt="team member" />
            <h5>Barr. Eniola </h5>
            <aside className="team-member-contact">
              <h6>
                <a href="mailto:webmaster@example.com">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} color="#475d5b" />
                </a>
              </h6>
              <h6>
                <FontAwesomeIcon icon={faPhone} color="#475d5b" /> - 0812348745
              </h6>
            </aside>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur corrupti minima tenetur quis veniam aliquid odio,
              autem earum. Quis vero, quasi error fugit eaque, quam nihil
              exercitationem laboriosam molestiae harum voluptas delectus
              architecto enim non recusandae. Labore necessitatibus provident
              ullam, praesentium quisquam optio perspiciatis architecto
              accusantium, ut ducimus asperiores impedit.
            </p>
          </div>

          <div className="team-member">
            <img src="/home-about.jpg" alt="team member" />
            <h5>Barr. Folarin </h5>
            <aside className="team-member-contact">
              <h6>
                <a href="mailto:webmaster@example.com">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} color="#475d5b" />
                </a>
              </h6>
              <h6>
                <FontAwesomeIcon icon={faPhone} color="#475d5b" /> - 0812348745
              </h6>
            </aside>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur corrupti minima tenetur quis veniam aliquid odio,
              autem earum. Quis vero, quasi error fugit eaque, quam nihil
              exercitationem laboriosam molestiae harum voluptas delectus
              architecto enim non recusandae. Labore necessitatibus provident
              ullam, praesentium quisquam optio perspiciatis architecto
              accusantium, ut ducimus asperiores impedit.
            </p>
          </div>

          <div className="team-member">
            <img src="/home-about.jpg" alt="team member" />
            <h5>Barr. Oyinkan </h5>{" "}
            <aside className="team-member-contact">
              <h6>
                <a href="mailto:webmaster@example.com">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} color="#475d5b" />
                </a>
              </h6>
              <h6>
                <FontAwesomeIcon icon={faPhone} color="#475d5b" /> - 0812348745
              </h6>
            </aside>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur corrupti minima tenetur quis veniam aliquid odio,
              autem earum. Quis vero, quasi error fugit eaque, quam nihil
              exercitationem laboriosam molestiae harum voluptas delectus
              architecto enim non recusandae. Labore necessitatibus provident
              ullam, praesentium quisquam optio perspiciatis architecto
              accusantium, ut ducimus asperiores impedit.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Quickcontact />
      </section>
      <style jsx>{`
        .team-header {
          background-image: url("/justice.webp");
          height: 200px;
          position: relative;
        }
        .team-header-wrap {
          padding-top: 70px;
        }
        .team-header-wrap h3 {
          text-align: center;
          color: white;
          font-weight: bolder;
          background: rgb(0, 0, 0, 0.9);
          padding: 10px;
          font-size: 0.9rem;
          font-family: "Scope One", serif;
        }

        @media only screen and (min-width: 700px) {
          .team-header-wrap h3 {
            font-size: 1rem;
          }
        }

        @media only screen and (min-width: 1000px) {
          .team-header-wrap h3 {
            font-size: 1.1rem;
          }
        }

        @media only screen and (min-width: 1200px) {
          .team-header-wrap h3 {
            font-size: 1.3rem;
          }
        }

        @media only screen and (min-width: 2000px) {
          .team-header-wrap h3 {
            font-size: 2rem;
          }
        }

        .team {
          padding: 20px 0;
        }

        .team-wrap {
          margin: auto;
          width: 90%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .team-member {
          box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
          padding: 10px;
          background: var(--card);
        }

        .team-member h5 {
          text-align: center;
          color: var(--text);
          font-weight: 500;
          margin-top: 5px;
          text-shadow: 1px 1px 2px grey;
        }

        .team-member p {
          margin-top: 10px;
          color: var(--text);
          font-weight: 500;
        }

        .team-wrap img {
          height: auto;
          width: 100%;
        }

        .team-member-contact {
          display: flex;
        }

        .team-member-contact h6 {
          margin: 0 10px;
        }

        @media only screen and (min-width: 700px) {
          .team-wrap {
            width: 90%;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media only screen and (min-width: 1000px) {
          .team {
            padding: 30px 0;
          }

          .team-wrap {
            width: 80%;
          }
        }

        @media only screen and (min-width: 1200px) {
          .team-wrap {
            width: 90%;
            grid-template-columns: 1fr 1fr 1fr;
          }

          .team-member-contact h6 {
            margin: 0 20px;
          }
        }

        @media only screen and (min-width: 1400px) {
          .team-wrap {
            width: 85%;
          }
        }

        @media only screen and (min-width: 2000px) {
          .team-wrap {
            width: 50%;
          }
        }
      `}</style>
    </Layout>
  );
}
