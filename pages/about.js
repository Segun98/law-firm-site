import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Quickcontact from "../components/Quickcontact";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us | Law Firm</title>
      </Head>
      <main className="about-header">
        <div className="about-header-wrap">
          <h3>We Are A Progressive Law Firm</h3>
        </div>
      </main>

      <section className="about">
        <h4>Who We Are</h4>
        <div className="about-wrap">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
            ex commodi asperiores sed natus assumenda necessitatibus est et eum!
            Natus, nihil. Recusandae corporis eligendi corrupti atque doloribus,
            tempora quod maxime! Consequatur unde est repellat repudiandae dicta
            natus provident ad quaerat magnam praesentium consequuntur minima
            accusantium ullam, sequi deleniti adipisci.
          </p>

          <img src="/home-about.jpg" alt="person" />
        </div>
      </section>

      <section className="strategic-fit">
        <div className="strategic-fit-wrap">
          <div className="strategic-fit-item">
            <h5>Mission</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              corrupti itaque aperiam assumenda iste at facilis tenetur
              reiciendis doloribus in accusantium, explicabo exercitationem
              magnam nobis molestiae id aliquid eius corporis.
            </p>
          </div>

          <div className="strategic-fit-item">
            <h5>Vision</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              corrupti itaque aperiam assumenda iste at facilis tenetur
              reiciendis doloribus in accusantium, explicabo exercitationem
              magnam nobis molestiae id aliquid eius corporis.
            </p>
          </div>

          <div className="strategic-fit-item">
            <h5>Values</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              corrupti itaque aperiam assumenda iste at facilis tenetur
              reiciendis doloribus in accusantium, explicabo exercitationem
              magnam nobis molestiae id aliquid eius corporis.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Quickcontact />
      </section>
      <style jsx>{`
        .about-header {
          background-image: url("/justice.webp");
          height: 200px;
          position: relative;
        }
        .about-header-wrap {
          padding-top: 70px;
        }
        .about-header-wrap h3 {
          text-align: center;
          color: white;
          font-weight: bolder;
          background: rgb(0, 0, 0, 0.9);
          padding: 10px;
          font-size: 0.9rem;
          font-family: "Scope One", serif;
        }

        @media only screen and (min-width: 700px) {
          .about-header-wrap h3 {
            font-size: 1rem;
          }
        }

        @media only screen and (min-width: 1000px) {
          .about-header-wrap h3 {
            font-size: 1.1rem;
          }
        }

        @media only screen and (min-width: 1200px) {
          .about-header-wrap h3 {
            font-size: 1.3rem;
          }
        }

        @media only screen and (min-width: 2000px) {
          .about-header-wrap h3 {
            font-size: 2rem;
          }
        }

        .about {
          padding: 20px 0;
        }

        .about-wrap {
          margin: auto;
          width: 90%;
          display: grid;
          grid-template-columns: 1fr;
          padding: 10px;
        }

        .about-wrap img {
          height: auto;
          width: 100%;
        }

        .about-wrap p {
          text-align: center;
          color: var(--text);
          font-weight: 500;
        }

        .about h4 {
          color: #00473e;
          text-align: center;
          text-shadow: 1px 1px 3px grey;
          font-family: "Scope One", serif;
        }

        @media only screen and (min-width: 700px) {
          .about-wrap {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .about-wrap p {
            text-align: left;
          }
        }

        @media only screen and (min-width: 1000px) {
          .about-wrap {
            margin-top: 20px;
            width: 70%;
          }

          .about-wrap p {
            line-height: 1.6;
          }
        }

        @media only screen and (min-width: 1200px) {
          .about-wrap {
            gap: 50px;
          }
        }

        @media only screen and (min-width: 1400px) {
          .about-wrap p {
            line-height: 2;
            font-size: 1.1rem;
          }
        }

        @media only screen and (min-width: 2000px) {
          .about-wrap {
            width: 50%;
          }
        }

        .strategic-fit {
          padding: 20px 0;
        }

        .strategic-fit-wrap {
          margin: auto;
          width: 90%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          place-items: center;
        }

        .strategic-fit-item {
          width: 300px;
          box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
          padding: 20px;
        }
        .strategic-fit-item h5 {
          color: var(--greenish);
          text-shadow: 1px 1px 3px grey;
        }

        .strategic-fit-item p {
          color: var(--text);
          font-weight: 500;
        }

        @media only screen and (min-width: 700px) {
          .strategic-fit-wrap {
            width: 80%;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media only screen and (min-width: 1000px) {
          .strategic-fit-wrap {
            width: 70%;
          }
        }

        @media only screen and (min-width: 1200px) {
          .strategic-fit-wrap {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media only screen and (min-width: 2000px) {
          .strategic-fit-wrap {
            width: 50%;
          }
        }
      `}</style>
    </Layout>
  );
}
