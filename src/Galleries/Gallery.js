import React from "react";
import Gallery from "react-photo-gallery";

const Galleries = () => {
  const photos = [
    {
      src: "https://www.fortishealthcare.com/speciality_banner/mobile/Dental-Care.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "https://kdahweb-static.kokilabenhospital.com/kdah-2019/slider/15799744911957.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "https://www.gleneaglesglobalhospitals.com/images/specalities/dentistry/best-hospitals-root-canal-treatment-2.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "https://thesteindentalgroup.com/wp-content/uploads/2020/05/Example-Image-compressor.jpg",
      width: 1,
      height: 1,
    },
    
  ];
  return <div>
      <Gallery photos={photos} />;
      
  </div>;
};

export default Galleries;
