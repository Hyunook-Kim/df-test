import React from "react";
import styled from "styled-components";
import CardComponent from "./Card";
import type { Card } from "../../../models/card";

interface CardsProps {
  cards: Card[];
}

const Cards: React.FC<CardsProps> = ({ cards }) => {
  return (
    <Container>
      {cards.map(({ id, title, description, imageUrl }) => (
        <CardComponent
          key={id}
          title={title}
          description={description}
          imageUrl={imageUrl}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
`;

export default Cards;
