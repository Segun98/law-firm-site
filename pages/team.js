import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

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
            <h4>Barr. Segun Os</h4>
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
            <h4>Barr. Eniola </h4>
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
            <h4>Barr. Folarin</h4>
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
            <h4>Barr. Oyinkan</h4>
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
      `}</style>
    </Layout>
  );
}
