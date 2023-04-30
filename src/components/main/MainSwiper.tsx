import { CSSProperties } from "react";
import * as Styled from "./swiper.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SwiperStyle extends CSSProperties {
  "--swiper-navigation-color": string;
}

export default function MainSwiper() {
  return (
    <Styled.Layout>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "black",
          } as SwiperStyle
        }
        slidesPerView={3}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={
          window.matchMedia("(max-width: 768px)").matches ? false : true
        }
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {Array.from({ length: 20 })
          .fill(0)
          .map((item) => {
            return (
              <>
                <SwiperSlide style={{ marginLeft: "80px" }} key={uuidv4()}>
                  <Styled.ListDiv>
                    <Styled.ListImg src="./asset/게임.gif" />
                    <Styled.TitleDiv>안녕하세요!</Styled.TitleDiv>
                  </Styled.ListDiv>
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
    </Styled.Layout>
  );
}
