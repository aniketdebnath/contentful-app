import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            necessitatibus molestias, quasi, doloremque reiciendis illo optio
            fugiat sequi corrupti, ab vero sunt numquam animi qui praesentium
            hic eum velit! Totam!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
