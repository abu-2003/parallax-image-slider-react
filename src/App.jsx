import "./App.css";
import Plx from "react-plx";
import { Swiper, SwiperSlide } from "swiper/react";  
import "swiper/swiper-bundle.css"; 
import { Navigation } from "swiper/modules";


export default function App() {
  return (
    <div>
      {/* Parallax Section */}
      <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 600,
              easing: "ease-in-out",
              properties: [
                {
                  startValue: 1,
                  endValue: 2,
                  property: "scale",
                },
                {
                  startValue: 1, 
                  endValue: 0, 
                  property: "opacity",
                },
              ],
            },
          ]}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <img style={{ width: "100%" }} src="fr.png" alt="foreground" />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 800,
              properties: [
                {
                  startValue: 0,
                  endValue: 2,
                  property: "translateY",
                },
                {
                  startValue: 1,
                  endValue: 2,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            position: "absolute",
            left: 0,
            top:"-10%",
            width: "100%",
          }}
        >
          <img style={{ width: "100%" }} src="pexels-therato-1933239.jpg" alt="background" />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 300,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity",
                  
                },
                {
                  startValue: 0,
                  endValue: 100,
                  property: "translateY", 
                },
              ],
            },
          ]}
          style={{
            position: "absolute",
            left: 0,
            top: "20vw",
            width: "100%",
            
          }}
        >
          <h1>Parallax</h1>
        </Plx>
      </div>

      {/* Image Slider Section */}
      <div className="Swiper" style={{ padding: "60px",  }}>
      <h2 style={{marginBottom: "50px" }}>
        Image Slider
      </h2>
        <Swiper
          spaceBetween={30}  
          slidesPerView={1}  
          navigation={true} 
          loop={true} 
          modules={[Navigation]} 
        >
        
          <SwiperSlide >
            <img src="pexels-archbob-1288190.jpg" alt="Slide 1" style={{ width: "100%" ,height: "100vh",objectFit:"cover"}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="pexels-nathan-moore-1300563-2533340.jpg" alt="Slide 2" style={{ width: "100%"  ,height: "100vh",objectFit:"cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="pexels-sebastian-velandia-183845690-11671897.jpg" alt="Slide 3" style={{ width: "100%"  ,height: "100vh",objectFit:"cover" }} />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
}
