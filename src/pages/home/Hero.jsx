import React from "react";
import "../../styles.css/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import Slider from "../../components/Slider";

const Hero = () => {
  return (
    <>
      <main className="scroll-container">
        <section>
          <div className="hero1">
            <div className="container hero2">
              <span className="hero-w">Elevate Your Fashion Game </span>
              with Our Stunning Shades!
              <p className="hero-w2">
                From Timeless Classics to the Latest Trends, Find the Perfect
                Pair to Define Your Look. Unleash Your Inner Fashion Icon with
                us.
              </p>
              <br />
            </div>
          </div>
        </section>
        {/* next */}
        <section>
          <div className="hero1-1">
            <div className="container hero2">
              <span className="hero-w">Shade the Style: </span>
              Elevate Your Look with Every Pair!
              <p className="hero-w2">
                Discover the Perfect Blend of Style and Sun Safety
              </p>
              <br />
            </div>
          </div>
        </section>
        {/* next */}
        <section>
          <div className="hero1-2">
            <div className="container hero2">
              <span className="hero-w">Discover Your Signature </span>Style with
              Our Fashion-Forward Shades!
              <p className="hero-w2">
                From Classic Aviators to Trendsetting Frames, Find Your
                Signature Look Today and Step into the Sun with Confidence.
              </p>
              <br />
            </div>
          </div>
        </section>
        {/* next */}
        <section>
          <div className="hero1-3">
            <div className="container hero2">
              <span className="hero-w">Embrace Effortless Elegance </span>
              with Our Fashion Shades Collection.
              <p className="hero-w2">
                Experience the Ultimate Fusion of Style and Sun Protection with
                Our Exquisite Collection of Fashion Shades.
              </p>
              <br />
            </div>
          </div>
        </section>
      </main>

      <div className="button-a">
        <a href="https://wa.me/+2348107419071" target="__blank">
          <button className="button">
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2xl"
              style={{ color: "#fff", paddingRight: "8px" }}
            />
            Get in touch
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
