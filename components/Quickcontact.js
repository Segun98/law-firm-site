import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

export default function Quickcontact() {
  return (
    <div>
      <section className="index-quick-contact">
        <div className="quick-contact-wrap">
          <div className="quick-contact-item">
            <div className="quick-contact-icon">
              <FontAwesomeIcon icon={faPhone} color="#faae2b" />
            </div>
            <div className="quick-contact-text">
              <p>Have a question? Call us now.</p>
              <p>+234-823-2936-912</p>
            </div>
          </div>

          <div className="quick-contact-item">
            <div className="quick-contact-icon">
              <FontAwesomeIcon icon={faLocationArrow} color="#faae2b" />
            </div>
            <div className="quick-contact-text">
              <p>Find us at</p>
              <p>Plot 15B, Ibadan, Oyo State</p>
            </div>
          </div>

          <div className="quick-contact-item">
            <div className="quick-contact-icon">
              <FontAwesomeIcon icon={faEnvelope} color="#faae2b" />
            </div>
            <div className="quick-contact-text">
              <p>Need Support? Drop us an email</p>
              <p>email@example.com</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .index-quick-contact {
          background: #333;
        }
        .quick-contact-wrap {
          display: flex;
          display: -webkit-flex;
          display: -ms-flexbox;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 15px 0;
          align-items: center;
          justify-content: center;
        }

        .quick-contact-wrap p {
          color: white;
        }

        .quick-contact-item {
          display: flex;
          display: -webkit-flex;
          display: -ms-flexbox;
          margin: 10px 0;
        }

        .quick-contact-icon {
          margin-right: 10px;
          font-size: 20px;
        }
        .quick-contact-icon .icon {
          color: white;
        }
        .quick-contact-text {
          display: flex;
          display: -webkit-flex;
          display: -ms-flexbox;
          flex-direction: column;
          line-height: 0.5;
        }

        @media only screen and (min-width: 700px) {
          .quick-contact-wrap {
            flex-direction: row;
            padding: 25px 0;
          }

          .quick-contact-item {
            margin-left: 20px;
          }
          .quick-contact-text {
            line-height: 1;
          }
        }

        @media only screen and (min-width: 1000px) {
          .quick-contact-item {
            margin-left: 60px;
          }
        }

        @media only screen and (min-width: 1400px) {
          .quick-contact-item {
            margin-left: 120px;
            font-size: 20px;
          }

          .quick-contact-wrap {
            padding: 45px 0;
          }
        }

        @media only screen and (min-width: 2400px) {
          .quick-contact-item {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
}
