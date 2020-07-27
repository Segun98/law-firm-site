import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Quickcontact from "../components/Quickcontact";

export default function Practice() {
  return (
    <Layout>
      <Head>
        <title>Practice Areas | Law Firm</title>
      </Head>
      <main className="practice-header">
        <div className="practice-header-wrap">
          <h3>We Are Here To Serve</h3>
        </div>
      </main>

      <section className="practice">
        <h3>Our Areas of Expertise</h3>
        <div className="practice-wrap">
          <div className="practice-item">
            <h4 className="practice-head" id="litigation">
              Litigation
            </h4>
            <div className="practice-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe quidem neque accusantium debitis voluptate vel fugit
                animi? Laudantium obcaecati reiciendis ab perspiciatis
                doloremque vitae sed excepturi quaerat repellat similique. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                facere?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                est laborum adipisci incidunt earum! Minima ea ratione
                laudantium saepe doloribus nulla, odit voluptatum deserunt illo
                quas consequuntur necessitatibus dolorem quaerat!
              </p>
            </div>
          </div>

          <div className="practice-item">
            <h4 className="practice-head" id="tax">
              Tax Advisory
            </h4>
            <div className="practice-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe quidem neque accusantium debitis voluptate vel fugit
                animi? Laudantium obcaecati reiciendis ab perspiciatis
                doloremque vitae sed excepturi quaerat repellat similique.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                illum excepturi saepe ullam, pariatur blanditiis soluta rerum
                aut nihil itaque laborum voluptates repellat veritatis non
                possimus ad ea a repudiandae tempora cum asperiores placeat
                mollitia ipsum. Natus error ullam, tenetur iusto obcaecati
                voluptatum qui animi optio facilis omnis neque sed.
              </p>
            </div>
          </div>

          <div className="practice-item">
            <h4 className="practice-head" id="dispute">
              Dispute Resolution
            </h4>
            <div className="practice-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe quidem neque accusantium debitis voluptate vel fugit
                animi? Laudantium obcaecati reiciendis ab perspiciatis
                doloremque vitae sed excepturi quaerat repellat similique.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                quia autem et maxime. Tempora quidem earum molestias harum?
                Aliquam soluta saepe exercitationem dolorem nulla molestiae
                aliquid. Nostrum laborum corporis esse maxime tempora labore
                officia ea modi id nobis necessitatibus ut temporibus pariatur,
                vel sequi aliquid alias maiores rem eius quis accusantium, earum
                distinctio fuga commodi. A assumenda similique dolore numquam.
              </p>
            </div>
          </div>

          <div className="practice-item">
            <h4 className="practice-head" id="corporate">
              Corporate and Commercial Practice
            </h4>
            <div className="practice-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe quidem neque accusantium debitis voluptate vel fugit
                animi? Laudantium obcaecati reiciendis ab perspiciatis
                doloremque vitae sed excepturi quaerat repellat similique.
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, molestiae explicabo. Molestias, assumenda dolores?
                Dicta rem quam id adipisci repellendus atque officiis
                dignissimos voluptatem ipsa cum vero enim magni laborum esse,
                eum facilis velit nesciunt amet ipsum, porro eaque suscipit?
                Nesciunt officia accusantium culpa repudiandae eaque dolorem quo
                rerum odio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Quickcontact />
      </section>
      <style jsx>{`
        .practice-header {
          background-image: url("/justice.webp");
          height: 200px;
          position: relative;
        }
        .practice-header-wrap {
          padding-top: 70px;
        }
        .practice-header-wrap h3 {
          text-align: center;
          color: white;
          font-weight: bolder;
          background: rgb(0, 0, 0, 0.9);
          padding: 10px;
          font-size: 0.9rem;
        }

        @media only screen and (min-width: 700px) {
          .practice-header-wrap h3 {
            font-size: 1rem;
          }
        }

        @media only screen and (min-width: 1000px) {
          .practice-header-wrap h3 {
            font-size: 1.1rem;
          }
        }

        @media only screen and (min-width: 1200px) {
          .practice-header-wrap h3 {
            font-size: 1.3rem;
          }
        }

        @media only screen and (min-width: 2000px) {
          .practice-header-wrap h3 {
            font-size: 2rem;
          }
        }

        .practice {
          padding: 20px 0;
        }

        .practice-wrap {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin: auto;
          width: 90%;
        }

        .practice-item {
          background: #fffffe;
          padding: 15px 30px;
          box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
        }

        .practice-item h4 {
          font-size: 1rem;
        }

        .practice h3{
          font-size: 1.1rem;
          text-align: center;
          color: var(--greenish);
          font-weight: bolder;
          padding: 10px 0;
          text-shadow: 1px 1px 1px #333;
        }

        .practice-content {
          margin-bottom: 10px;
          color: #475d5b;
        }

        .practice-head {
          color: #00473e;
          padding-bottom: 20px;
          font-weight: bold;
          text-shadow: 1px 1px 2px grey;
        }

        @media only screen and (min-width: 700px) {
          .practice-wrap {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media only screen and (min-width: 1000px) {
          .practice-wrap {
            width: 80%;
            gap: 20px;
          }

          .practice-item h4 {
            font-size: 1.1rem;
          }
          .practice h3{
          font-size: 1.2rem;
        }
        }

        @media only screen and (min-width: 1200px) {
          .practice-wrap {
            grid-template-columns: 1fr 1fr
            width: 80%;
            gap: 20px;
          }
        }

        @media only screen and (min-width: 1400px) {
          .practice-wrap {
            width: 90%;
          }

          .practice-item h4 {
            font-size: 1.2rem;
          }

          .practice h3{
          font-size: 1.3rem;
        }
        }

        @media only screen and (min-width: 2000px) {
          .practice-wrap {
            width: 60%;
          }
          .practice {
            padding: 50px 0;
          }

          .practice-item h4 {
            font-size: 1.3rem;
          }
          .practice h3{
          font-size: 1.4rem;
        }
        }
      `}</style>
    </Layout>
  );
}
