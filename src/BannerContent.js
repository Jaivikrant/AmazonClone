import React, { useState,useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerContent = () => {
    const[imageId, setImageId] = useState(0);

const ImageData = [
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/May/HSS_3000x1200-PC-1._CB589991128_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q2/PC_Hero_VG_BAU_Consoles_Apr1st-week_Unrec_2x._CB592233658_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/SummerSale/GW/D81067155_WLD_SummerSale_Design_SIM_DesktopTallHero_3000x1200._CB589999476_.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Skincare_BVD_pc_hero_3000x1200eg._CB588348871_.jpg",
    },
  ];

  const carousel = () => {
    setTimeout(() => {
      setImageId(Math.floor(Math.random() * 5));
    }, 3000);
  };
  useEffect(() => {
    return carousel();
  }, [imageId]);

  return (
    <div> <LazyLoadImage
        src={ImageData[imageId]?.image}
        alt="/public/screen.jpg"
        effect="blur"
      /></div>
  )
}

export default BannerContent;