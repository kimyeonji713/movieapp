import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { searchMovie } from "../../api";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { W500_URL } from "../../constant/imgUrl";

const Container = styled.div`
  padding: 150px ${spacing.side};
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    &::placeholder {
      font-size: 20px;
    }
    padding: 0 10px;
    font-size: 20px;
    letter-spacing: 0;
  }

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.h4`
  opacity: 0.7;
  font-size: 18px;
  margin-top: 20px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* (옆으로 반복할 갯수, 나열하는 각자의 크기 값) */
  /* fr: 하나씩 공등한 값을 똑같이 나눠가진다. */
  row-gap: 30px;
  /* 위아래 간격, 그리드만의 간격 */
  column-gap: 15px;
  /* 양 옆 간격 */
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 400px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    const { results } = await searchMovie(keyword);
    // console.log(result);
    setSearchData(results);
    setIsLoading(false);
  };

  // console.log(searchData?.length === 0 ? "없음" : "있음");
  // console.log(searchMovie);
  // console.log(errors?.keyword?.message ? "" : errors?.keyword?.message);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색 내용을 입력해 주세요.",
          })}
          type="text"
          placeholder="Search"
        />
        <button>
          <FiSearch />
        </button>

        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>

      {searchData?.length === 0 ? (
        "검색결과없음"
      ) : (
        <>
          {searchData && (
            <ConWrap>
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {searchData.map((data) => (
                    <Con key={data.id}>
                      <Link to={`/detail/${data.id}`}>
                        <Bg>
                          <img
                            src={W500_URL + data.poster_path}
                            alt={data.title}
                          />
                        </Bg>
                      </Link>
                    </Con>
                  ))}
                </>
              )}
            </ConWrap>
          )}
        </>
      )}
    </Container>
  );
};
