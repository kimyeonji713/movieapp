import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { ORIGIN_URL } from "../../../constant/imgUrl";

const Container = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  padding: 420px ${spacing.side} 0 ${spacing.side};
  position: relative;
  h3 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
  }

  p {
    width: 600px;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    padding: 550px ${spacing.moSide} 0 ${spacing.moSide};
    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    p {
      max-width: 500px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 40%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const MainBanner = ({ data }) => {
  return (
    <Container $bgUrl={data.backdrop_path}>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
    </Container>
  );
};
