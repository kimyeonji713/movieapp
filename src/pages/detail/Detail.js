import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { ORIGIN_URL, W500_URL } from "../../constant/imgUrl";
import { spacing } from "../../GlobalStyled";
import { Loading } from "../../components/Loading";
import { useParams } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  padding: 150px 20%;
  display: flex;
  @media screen and (max-width: 1300px) {
    padding: 150px 5%;
  }
`;

const CoverImg = styled.img`
  width: 45%;
  margin-right: 5%;
  object-fit: cover;
`;

const ConWrap = styled.div`
  width: 40%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1300px) {
    h3 {
      font-size: 60px;
      font-weight: 700;
    }
  }
`;

const Info = styled.div`
  span {
    display: block;
    padding: 10px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }
  display: flex;

  @media screen and (max-width: 1300px) {
    border-radius: 15px;
    font-size: 14px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    border-radius: 15px;
    font-size: 10px;
    font-weight: 400;
    padding: 10px 3px;
  }
`;

const Genres = styled.ul`
  list-style: disc;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  li {
    margin-top: 10px;
  }

  @media screen and (max-width: 1300px) {
    margin-top: 30px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 100px;
  line-height: 30px;

  @media screen and (max-width: 1300px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const Detail = () => {
  useScrollTop();
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const params = useParams();
  const { id: movieId } = useParams();
  // console.log(params);
  console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);
        // console.log(data);
        // const { data: movieData } = await movieDetail(519182);

        setMovieData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(movieData);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <CoverImg
            src={ORIGIN_URL + movieData.poster_path}
            alt={movieData.title}
          />
          <ConWrap>
            <h3>{movieData.title}</h3>
            <Info>
              <span>{movieData.release_date}</span>

              <span>{Math.round(movieData.vote_average)}점</span>

              <span>{movieData.runtime}분</span>
            </Info>

            <Genres>
              {movieData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>

            <Desc>{movieData.overview}</Desc>
          </ConWrap>
        </Container>
      )}
    </>
  );
};
