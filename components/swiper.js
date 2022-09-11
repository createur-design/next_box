import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import AudioPlayer from "./AudioPlayer";

function SwiperComponent() {
  const [allMusics, setAllMusics] = useState([]);
  const [music, setMusic] = useState();

  const fetchMusics = async () => {
    const res = await fetch("api/musics");
    const musics = await res.json();
    setAllMusics(musics);
  };
  useEffect(() => {
    fetchMusics();
  });

  const handleClick = async (e) => {
    const index = Number(e.currentTarget.dataset.id);
    await setMusic(allMusics[index - 1].src);
  };

  return (
    <>
      <div className="grid-x align-right">
        <div className="cell small-12 medium-10">
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
            {allMusics.map((music) => (
              <SwiperSlide
                data-id={music.id}
                key={music.id}
                onClick={handleClick}
              >
                <Image
                  //   src="http://placeimg.com/640/640/any"
                  src={music.img}
                  alt={music.title}
                  layout="fill"
                />
                <div className="title">
                  <h2>{music.title}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <AudioPlayer title={music} />
    </>
  );
}

export default SwiperComponent;
