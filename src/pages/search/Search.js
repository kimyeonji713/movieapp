import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { searchMovie } from "../../api";

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

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    const result = await searchMovie(keyword);
    console.log(result);
  };

  // console.log(searchMovie);
  // console.log(errors?.keyword?.message);

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
    </Container>
  );
};
