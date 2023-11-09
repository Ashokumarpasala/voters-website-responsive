import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Caroules = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className='p-5 carsole'>
      <div>
       <img style={{width:"350px", borderRadius:"20px", backgroundSize:"cover", height:"350px"}} src="https://staticimg.amarujala.com/assets/images/2023/10/09/mp-elections-2023_1696826060.jpeg?w=414" alt="" />
      </div>
      <div>
        <img style={{width:"350px", borderRadius:"20px", backgroundSize:"cover", height:"350px"}} src="https://eci.gov.in/uploads/monthly_2023_07/Screenshot2023-07-25155247.thumb.png.1ce253b2435bccdde40c22c2f925d4f8.png" alt="" />
      </div>
     
      <div>
        <img style={{width:"350px", borderRadius:"20px", backgroundSize:"cover", height:"350px"}} src="https://dims.apnews.com/dims4/default/d5faab2/2147483647/strip/true/crop/3000x2002+0+0/resize/599x400!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2F63ee1a4fd7454b3399d1e2d1451ee589%2F3000.jpeg" alt="" />
      </div>
     
      <div>
        <img style={{width:"350px", borderRadius:"20px", backgroundSize:"cover", height:"350px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYwORTeLscSMuxhmT3PbPq3uRjzZPHijFTA&usqp=CAU" alt="" />
      </div>
     
    </Slider>
  );
};

export default Caroules;
