import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import AudioPlayer from "./audioPlayer";
import Vinyle from "./vinyle";

function SwiperComponent() {
  const [allMusics, setAllMusics] = useState([]);
  const [music, setMusic] = useState();
  const [infoMusic, setInfoMusic] = useState({});

  const fetchMusics = async () => {
    const res = await fetch("api/musics");
    const musics = await res.json();
    setAllMusics(musics);
  };
  useEffect(() => {
    fetchMusics();
  }, []);

  const handleClick = async (e) => {
    const index = Number(e.currentTarget.dataset.id);
    await setMusic(allMusics[index].src);
    await setInfoMusic(allMusics[index]);
  };

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiperSlide"
      >
        {allMusics.map((music, index) => (
          <SwiperSlide key={index}>
            <Image
              //   src="http://placeimg.com/640/640/any"
              src={music.img}
              alt={music.title}
              layout="fill"
            />
            <div className="title">
              <h2 className="h3" data-id={index} onClick={handleClick}>
                {music.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <AudioPlayer title={music} />
      <Vinyle infos={infoMusic} />
    </>
  );
}

export default SwiperComponent;
