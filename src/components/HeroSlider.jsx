import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import heroDes from "../assets/slider-4.jpg";
import hero2 from "../assets/slider-2.png";
import hero3 from "../assets/slider-3.jpg";
import hero4 from "../assets/slider-1.png";

export const HeroSlider = ({ divRef }) => {
  const optionsSliderReviews = {
    type: "fade",
    rewind: true,
    arrows: true,
    pagination: false,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    focus: false,
    easing: "linear",
    speed: 0,
  };

  return (
    <Splide aria-labelledby="Slider Reviews" options={optionsSliderReviews}>
      <SplideSlide className="flex justify-center items-center review">
        <section
          className="w-full h-[calc(100svh-89px)] max-h-[900px] flex justify-center items-center flex-col relative"
          id="home"
          ref={divRef}
        >
          <img
            src={heroDes}
            alt="Foto de sonrisa perfecta"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="w-[90%] md:w-auto absolute bottom-5 bg-white backdrop-blur-xl p-5 rounded-xl">
            <h1 className="font-bold text-4xl text-center text-primary">
              Dra. Claudia Olmos
            </h1>
            <p className="font-medium text-xl md:text-2xl text-center text-gray-900">
              Experta en crear sonrisas inolvidables.
            </p>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center review">
        <section
          className="w-full h-[calc(100svh-89px)] max-h-[900px] flex justify-center items-center flex-col relative"
          id="home"
          ref={divRef}
        >
          <img
            src={hero2}
            alt="Foto de sonrisa perfecta"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="absolute w-[90%] md:w-auto bottom-5 bg-white backdrop-blur-xl p-5 rounded-xl">
            <h1 className="font-bold text-4xl text-center text-primary">
              Dra. Claudia Olmos
            </h1>
            <p className="font-medium text-xl md:text-2xl text-center text-gray-900">
              Implantología avanzada al alcance de todos.
            </p>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center review">
        <section
          className="w-full h-[calc(100svh-89px)] max-h-[900px] flex justify-center items-center flex-col relative"
          id="home"
          ref={divRef}
        >
          <img
            src={hero3}
            alt="Foto de sonrisa perfecta"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="absolute w-[90%] md:w-auto bottom-5 bg-white backdrop-blur-xl p-5 rounded-xl">
            <h1 className="font-bold text-4xl text-center text-primary">
              Dra. Claudia Olmos
            </h1>
            <p className="font-medium text-xl md:text-2xl text-center text-gray-900">
              La ciencia de los implantes, la magia de tu sonrisa.
            </p>
          </div>
        </section>
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center review">
        <section
          className="w-full h-[calc(100svh-89px)] max-h-[900px] flex justify-center items-center flex-col relative"
          id="home"
          ref={divRef}
        >
          <img
            src={hero4}
            alt="Foto de sonrisa perfecta"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="absolute w-[90%] md:w-auto bottom-5 bg-white backdrop-blur-xl p-5 rounded-xl">
            <h1 className="font-bold text-4xl text-center text-primary">
              Dra. Claudia Olmos
            </h1>
            <p className="font-medium text-xl md:text-2xl text-center text-gray-900">
              Cuido de tu sonrisa con precisión y experiencia.
            </p>
          </div>
        </section>
      </SplideSlide>
    </Splide>
  );
};
