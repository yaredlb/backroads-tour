import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Experience the richness of diversity as you journey through varied
            landscapes, cultures, and traditions. Every destination offers a
            unique perspective, a distinct flavor, and a story waiting to be
            told.
          </p>
          <p>
            From the vibrant streets of bustling cities to the tranquil beauty
            of untouched nature, each place you visit reveals something new and
            unexpected. Embrace the contrasts, and let each difference inspire
            you as you continue to explore the world in all its variety.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
