import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | Law Firm</title>
      </Head>
      <main className="contact-header">
        <div className="contact-header-wrap">
          <h3>How May We Help You</h3>
        </div>
      </main>

      <section className="contact">
        <div className="contact-wrap">
          <aside>
            <h5>Address</h5>
            <p>Plot 15, Ibadan, Oyo State</p>
            <h5>Telephone</h5>
            <p>
              +234-123-456-7890
              <br />
              +234-123-456-7890
            </p>
            <h5>Email</h5>
            <p>email@example.com</p>
          </aside>
          <aside>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="phone" name="phone" id="phone" />
              </div>
              <div>
                <label htmlFor="body"> Body</label>
                <textarea
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="contact-button">
                <button type="submit">Send</button>
              </div>
            </form>
          </aside>
        </div>
      </section>

      <style jsx>{`
        .contact-header {
          background-image: url("/justice.webp");
          height: 200px;
          position: relative;
        }
        .contact-header-wrap {
          padding-top: 70px;
        }
        .contact-header-wrap h3 {
          text-align: center;
          color: white;
          font-weight: bolder;
          background: rgb(0, 0, 0, 0.9);
          padding: 10px;
          font-size: 0.9rem;
          font-family: "Scope One", serif;
        }

        @media only screen and (min-width: 700px) {
          .contact-header-wrap h3 {
            font-size: 1rem;
          }
        }

        @media only screen and (min-width: 1000px) {
          .contact-header-wrap h3 {
            font-size: 1.1rem;
          }
        }

        @media only screen and (min-width: 1200px) {
          .contact-header-wrap h3 {
            font-size: 1.3rem;
          }
        }

        @media only screen and (min-width: 2000px) {
          .contact-header-wrap h3 {
            font-size: 2rem;
          }
        }

        .contact {
          padding: 20px 0;
        }

        .contact-wrap {
          display: flex;
          flex-direction: column-reverse;
          margin: auto;
          width: 90%;
        }

        .contact-wrap aside {
          margin-top: 15px;
        }

        .contact-wrap form div {
          display: flex;
          flex-direction: column;
          margin-top: 5px;
        }

        .contact-wrap form input,
        textarea {
          padding: 5px;
        }

        .contact-wrap form label {
          color: var(--greenish);
        }

        .contact-wrap .contact-button {
          text-align: center;
        }

        .contact-wrap button {
          padding: 10px 25px;
          background: #faae2b;
          color: #00473e;
          border: none;
        }

        .contact-wrap h5 {
          font-weight: bold;
          text-shadow: 1px 1px 2px grey;
          color: #00473e;
        }

        @media only screen and (min-width: 700px) {
          .contact-wrap {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 50px;
            width: 70%;
          }
        }

        @media only screen and (min-width: 1200px) {
          .contact-wrap {
            width: 60%;
          }
        }

        @media only screen and (min-width: 1400px) {
          .contact-wrap {
            width: 50%;
          }
        }

        @media only screen and (min-width: 2000px) {
          .contact-wrap {
            width: 40%;
          }
        }
      `}</style>
    </Layout>
  );
}
