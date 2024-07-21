import styled from "styled-components";

const Container = styled.footer`
  height: 150px;
  border-top: 1px solid #555;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const Footer = () => {
  return <Container>&copy; kimyeonji 2024 </Container>;
};
