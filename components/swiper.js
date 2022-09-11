import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import AudioPlayer from "./audioPlayer";

function SwiperComponent() {
  const musics = [
    {
      id: 1,
      title: "Stranger Things",
      src: "eleven_Stranger_Things.mp3",
      img: "http://placeimg.com/640/640/any",
    },
    {
      id: 2,
      title: "Welcome to my house",
      src: "Ason_ID-Welcome_to_my_house.mp3",
      img: "http://placeimg.com/640/640/people/any",
    },
    {
      id: 3,
      title: "Meizong Dawn of light",
      src: "Meizong-Dawn_of_Light.mp3",
      img: "http://placeimg.com/800/800/any",
    },
    {
      id: 4,
      title: "RnbStylerz What",
      src: "Rnbstylerz_AREES-What(Edit).mp3",
      img: "http://placeimg.com/640/640/tech/any",
    },
    {
      id: 5,
      title: "Slinz other side",
      src: "Slinz-Other_Side.mp3",
      img: "http://placeimg.com/640/640/nature/grayscale/any",
    },
  ];

  const [soundTitle, setSoundTitle] = useState();
  const [isPlaying, setIsPlaying] = useState(true);

  const handleClick = async (e) => {
    if (isPlaying) {
      const index = Number(e.currentTarget.dataset.id);
      await setSoundTitle(musics[index - 1].src);
    }
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
            {musics.map((music) => (
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
      <AudioPlayer title={soundTitle} />
    </>
  );
}

export default SwiperComponent;
