import React from "react";
import Gallery from "react-photo-gallery";

const Galleries = () => {
  const photos = [
    {
      src: "https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-01-1024x683.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "https://lifebeyondnumbers.b-cdn.net/wp-content/uploads/2017/05/must-visit-places-bangladesh.png",
      width: 1,
      height: 1,
    },
    {
      src: "https://i.ytimg.com/vi/KXg2AaWO7oM/maxresdefault.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image005-1024x684.jpg",
      width: 1,
      height: 1,
    },
    
  ];
  return <div>
      <Gallery photos={photos} />;
      
  </div>;
};

export default Galleries;
