import React from "react";
import styled from "styled-components";
import CardSectionHeader from "./CardSectionHeader";
import Cards from "./Cards";

const CardSection: React.FC = () => {
  return (
    <Container>
      <CardSectionHeader />
      <Cards />
    </Container>
  );
};

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
`;

export default CardSection;
