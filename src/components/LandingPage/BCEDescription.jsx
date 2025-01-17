import AOS from "aos";
import "aos/dist/aos.css";
import AboutCloud1 from "../../assets/images/LandingPage/AboutCloud1.png";
import AboutCloud2 from "../../assets/images/LandingPage/AboutCloud2.png";
import BCEBlue from "../../assets/images/LandingPage/BCEBlue.png";
import ShadowBCEBlue from "../../assets/images/LandingPage/shadow-bceblue.png";
import Dice from "../../assets/images/LandingPage/Dice.png";

AOS.init();

const BCEDescription = () => {
  return (
    <div className="relative flex flex-col items-center px-10 pb-12 pt-24 sm:gap-10 md:flex-row md:px-10 md:pb-2 md:pt-40 lg:px-20 lg:pt-60">
      <img
        src={Dice}
        className="absolute bottom-0 right-0 -z-10 max-w-[100px] md:bottom-24 md:max-w-[120px] md:translate-y-20 lg:max-w-[150px]"
      />
      <img
        src={AboutCloud1}
        className="absolute z-10 max-w-[100px] -translate-x-32 -translate-y-12 md:max-w-[200px] md:-translate-x-20 md:-translate-y-40 lg:max-w-[280px] lg:-translate-x-36 lg:-translate-y-56"
      />

      <img
        src={AboutCloud2}
        className="absolute z-10 max-w-[100px] translate-x-20 translate-y-20 md:max-w-[170px] md:translate-x-64 md:translate-y-20 lg:max-w-[200px] lg:translate-x-80 lg:translate-y-28"
      />

      <img
        src={ShadowBCEBlue}
        className="absolute -z-10 hidden md:block md:-translate-x-[40%] md:translate-y-10 lg:translate-y-16"
      />

      <div className="mb-5 flex w-fit flex-col items-center md:mb-10 md:p-10">
        <img
          src={BCEBlue}
          className="max-w-[220px] md:max-w-[320px] lg:max-w-[430px]"
          alt="BCE Blue"
        />
      </div>

      <p className="w-[300px] rounded-lg bg-[#0000004d] p-3 text-justify font-montserrat text-xs text-white sm:text-sm md:w-full md:text-lg lg:bg-transparent">
        Batam Campus Expo adalah kegiatan memperkenalkan berbagai Perguruan
        Tinggi di Indonesia kepada siswa/i Batam oleh Mahasiswa asal Batam yang
        berkuliah di berbagai Perguruan Tinggi di seluruh Indonesia. Tujuan
        utama kegiatan ini adalah untuk menginspirasi dan memotivasi siswa-siswi
        Batam dalam merencanakan jenjang pendidikan yang lebih tinggi.
      </p>
    </div>
  );
};

export default BCEDescription;
