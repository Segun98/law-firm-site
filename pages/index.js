import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Law Firm | Home</title>
        </Head>
        <main className="intro">
          <Carousel indicators={false} interval={7000}>
            <Carousel.Item>
              <img className="d-block w-100" src="/law.jpg" alt="First slide" />
              <Carousel.Caption>
                <h3>We Are Your Trusted Legal Partner</h3>
                <p>
                  We Provide Wide Ranging Legal Services for Our Clients, from
                  Corporate and Commercial Practice to Dispute Resolution.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="justice.webp"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="service.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </main>

        <section className="home-services">
          <h2 className="home-service-title">Firm's Area of Practice</h2>
          <div className="home-service-wrap">
            <div className="home-service-item">
              <div className="home-service-logo">Litigation</div>
              <div className="home-service-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe quidem neque accusantium debitis voluptate vel fugit
                animi? Laudantium obcaecati reiciendis ab perspiciatis
                doloremque vitae sed excepturi quaerat repellat similique.
              </div>
              <Link href="/practice#litigation">
                <a>Read More</a>
              </Link>
            </div>

            <div className="home-service-item">
              <div className="home-service-logo">Tax Advisory</div>
              <div className="home-service-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe quidem neque accusantium debitis voluptate vel fugit
                animi? Laudantium obcaecati reiciendis ab perspiciatis
                doloremque vitae sed excepturi quaerat repellat similique.
              </div>
              <Link href="/practice#tax">
                <a>Read More</a>
              </Link>
            </div>

            <div className="home-service-item">
              <div className="home-service-logo">Dispute Resolution</div>
              <div className="home-service-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe quidem neque accusantium debitis voluptate vel fugit
                animi? Laudantium obcaecati reiciendis ab perspiciatis
                doloremque vitae sed excepturi quaerat repellat similique.
              </div>
              <Link href="/practice#dispute">
                <a>Read More</a>
              </Link>
            </div>

            <div className="home-service-item">
              <div className="home-service-logo">
                Corporate and Commercial Practice
              </div>
              <div className="home-service-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                saepe quidem neque accusantium debitis voluptate vel fugit
                animi? Laudantium obcaecati reiciendis ab perspiciatis
                doloremque vitae sed excepturi quaerat repellat similique.
              </div>
              <Link href="/practice#corporate">
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </section>

        <section className="home-about">
          <div className="home-about-wrap">
            <div className="home-about-content">
              <h1>Flo Law Firm</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum in, aliquid obcaecati recusandae mollitia, quae iste
                sunt nesciunt eaque possimus iure incidunt labore inventore
                vero, ratione accusamus cupiditate sapiente.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et
                blanditiis perspiciatis modi fugiat eos totam recusandae minus
                natus repudiandae illo consequatur vel cum praesentium officia
                exercitationem perferendis fugit autem nobis labore omnis
                tempore suscipit? Explicabo quos ipsum facilis laborum!
              </p>
            </div>
            <img src="/home-about.jpg" alt="a team member" />
          </div>
          <aside className="home-about-btn">
            <Link href="/about">
              <a>Read About Us</a>
            </Link>
          </aside>
        </section>
        <section className="home-contact">
          <h3>We Are a Message Away</h3>
          <div className="home-contact-wrap">
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
              <aside>
                <button type="submit">Send</button>
              </aside>
            </form>
          </div>
        </section>

        <style jsx>{`
          @media only screen and (min-width: 1000px) {
            .intro img {
              height: 550px;
              position: relative;
            }
          }
          @media only screen and (min-width: 1200px) {
            .intro img {
              position: relative;
            }
          }

          @media only screen and (min-width: 2000px) {
            .intro img {
              height: 800px;
            }
          }

          .home-services {
            padding: 20px 0;
          }
          .home-service-title {
            text-align: center;
            margin-bottom: 15px;
            font-size: 1.1rem;
            font-weight: bold;
          }
          .home-service-wrap {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin: auto;
            width: 90%;
          }

          .home-service-item {
            background: #fffffe;
            padding: 15px 30px;
            box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
          }

          .home-service-content {
            margin-bottom: 10px;
            color: #475d5b;
          }

          .home-service-item a {
            color: #faae2b;
          }
          .home-service-item a:hover {
            transition: ease-in 0.3s;
            /* border-bottom: 1px solid #00473e; */
          }

          .home-service-logo {
            color: #00473e;
            padding-bottom: 20px;
            font-weight: bold;
            text-shadow: 1px 1px 2px grey;
          }

          @media only screen and (min-width: 700px) {
            .home-service-wrap {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media only screen and (min-width: 1000px) {
            .home-service-wrap {
              width: 80%;
              gap: 20px;
            }

            .home-service-title {
              font-size: 1.3rem;
            }
          }

          @media only screen and (min-width: 1200px) {
            .home-service-wrap {
              grid-template-columns: 1fr 1fr 1fr;
              width: 80%;
              gap: 20px;
            }
            .home-service-title {
              padding: 20px 0;
            }
          }

          @media only screen and (min-width: 1400px) {
            .home-service-wrap {
              grid-template-columns: 1fr 1fr 1fr 1fr;
              width: 90%;
            }
          }

          @media only screen and (min-width: 2000px) {
            .home-service-wrap {
              grid-template-columns: 1fr 1fr 1fr 1fr;
              width: 60%;
            }
            .home-services {
              padding: 50px 0;
            }
          }

          .home-about {
            background: #00473e;
            padding: 20px 0;
          }

          .home-about-wrap {
            display: grid;
            grid-template-columns: 1fr;
            -ms-grid-columns: 1fr;
            gap: 10px;
            margin: auto;
            width: 90%;
            place-items: center;
          }

          .home-about-wrap img {
            height: auto;
            width: 100%;
          }

          .home-about-content {
            color: white;
            text-align: center;
          }

          .home-about-content h1 {
            color: #faae2b;
            font-size: 1.15rem;
            font-weight: bold;
          }

          .home-about-content p {
            margin: 20px 0;
          }

          .home-about-btn {
            text-align: center;
            margin-top: 40px;
          }
          .home-about-btn a {
            background: #faae2c;
            color: #00473e;
            padding: 10px;
          }

          .home-about-btn a:hover {
            transition: ease-in 0.3s;
            border-bottom: 1px solid #00473e;
          }

          @media only screen and (min-width: 700px) {
            .home-about-wrap {
              width: 90%;
              grid-template-columns: 1fr 1fr;
              -ms-grid-columns: 1fr 1fr;
            }

            .home-about-content p {
              text-align: left;
              line-height: 1.5;
            }
          }

          @media only screen and (min-width: 1000px) {
            .home-about-wrap {
              width: 80%;
              gap: 20px;
            }

            .home-about {
              padding: 50px 0;
            }

            .home-about-content h1 {
              font-size: 1.3rem;
            }
          }

          @media only screen and (min-width: 2000px) {
            .home-about-wrap {
              width: 50%;
            }
          }

          .home-contact {
            padding: 20px 0;
          }

          .home-contact h3 {
            text-align: center;
            color: #00473e;
            font-weight: bold;
            font-size: 1.1rem;
          }
          .home-contact form {
            margin: auto;
            width: 85%;
          }

          .home-contact form div {
            display: flex;
            flex-direction: column;
          }

          .home-contact form label {
            font-weight: bold;
            color: #00473e;
          }

          .home-contact form input {
            padding: 5px;
          }

          .home-contact form textarea {
            padding: 10px;
          }

          .home-contact form aside {
            text-align: center;
            margin-top: 10px;
          }
          .home-contact form aside button {
            padding: 10px 25px;
            background: #faae2b;
            color: #00473e;
            border: none;
          }

          @media only screen and (min-width: 700px) {
            .home-contact form {
              width: 60%;
            }
          }

          @media only screen and (min-width: 1000px) {
            .home-contact h3 {
              font-size: 1.15rem;
            }
          }

          @media only screen and (min-width: 1200px) {
            .home-contact h3 {
              font-size: 1.2rem;
            }
            .home-contact form {
              width: 40%;
            }
          }

          @media only screen and (min-width: 2000px) {
            .home-contact h3 {
              font-size: 1.3rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
