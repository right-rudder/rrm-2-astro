import Marquee from "react-fast-marquee";
import clientLogos from "../data/clientLogos";

const MarqueeComponent = () => {
  return (
    <Marquee
      gradient={true}
      loop={0}
      play={true}
      autoFill={true}
      pauseOnHover={true}
      speed={50}
      gradientColor="#1e2939"
      style={{ zIndex: 20 }}
    >
      {clientLogos.map((logo, index) => (
        <a
          href={logo.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center align-middle py-2"
        >
          <img
            src={logo.url}
            alt={`${logo.name} logo`}
            className={`min-w-32 md:max-h-20 max-w-36 md:max-w-52 w-full object-contain duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-110 ${
              logo.invert ? "invert" : ""
            }`}
            style={{ margin: "0 36px" }}
            width={200}
            height={100}
            loading="lazy"
          />
        </a>
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
