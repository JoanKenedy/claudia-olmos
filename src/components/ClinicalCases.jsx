import caso from "../assets/caso-5-1.jpg";
import caso2 from "../assets/caso-5-3.jpg";
import caso3 from "../assets/caso-3-2.jpg";
import caso4 from "../assets/caso-3-3.jpg";
import { TitleSection } from "./TitleSection";

export const ClinicalCases = () => {
  return (
    <section className="py-8">
      <TitleSection title="Nuestro trabajo" />
      <div className="container-cases grid grid-cols-1 md:grid-cols-3  py-7">
        <div class="item-fotos">
          <img src={caso} alt="" />
          <img src={caso2} alt="" class="foto-despues" />
        </div>
        <div class="item-fotos">
          <img src={caso3} alt="" />
          <img src={caso4} alt="" class="foto-despues" />
        </div>
        <div class="item-fotos">
          <img src={caso} alt="" />
          <img src={caso2} alt="" class="foto-despues" />
        </div>
        <div class="item-fotos">
          <img src={caso} alt="" />
          <img src={caso2} alt="" class="foto-despues" />
        </div>
        <div class="item-fotos">
          <img src={caso} alt="" />
          <img src={caso2} alt="" class="foto-despues" />
        </div>
        <div class="item-fotos">
          <img src={caso} alt="" />
          <img src={caso2} alt="" class="foto-despues" />
        </div>
      </div>
    </section>
  );
};
