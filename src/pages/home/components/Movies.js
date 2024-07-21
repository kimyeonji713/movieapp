import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { W500_URL } from "../../../constant/imgUrl";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

const params = {
  slidesPerView: 8.3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 8.3,
    },
    640: {
      slidesPerView: 5.2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
  },
};

export const Movies = ({ title, movieData }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <img src={`${W500_URL}${data.poster_path}`} alt="" />
              {/* <img src={W500_URL + data.poster_path} alt="" /> */}

              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
