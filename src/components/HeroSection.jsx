import "../App.css";

const HeroSection = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content ">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP TO WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP TO WITH OUR SHOES.</p>
          <div className="hero-button">
            <button>Show Now</button>
            <button className="secondary-button">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available on</p>
        <div className="brand-icons">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
        </div>
          </div>
        </div>

        <div className="hero-images">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  );
};

export default HeroSection;
