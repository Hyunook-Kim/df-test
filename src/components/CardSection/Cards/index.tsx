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
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          imageSrcSet={card.imageSrcSet}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  /* @media (max-width: 560px) { */
  @media (max-width: 1017px) {
    justify-content: center;
  }
`;

export default Cards;
