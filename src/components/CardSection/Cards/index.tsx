import React from "react";
import styled from "styled-components";
import Card from "./Card";

// TODO: Replace with API fetch
const DUMMY_DATA = [
  {
    id: 1,
    title: "The Leaning Tower of Pisa",
    description:
      "The Leaning Tower of Pisa, or simply the Tower of Pisa (Torre di Pisa) is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa Cathedral Square (Piazza del Duomo).",
    imageUrl: "",
    year: 1173,
    region: "Italy",
  },
  {
    id: 2,
    title: "Sagrada Familia",
    description:
      "The Basilica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Familia, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852-1926), in 2010 it was consecrated by Pope Benedict XVI.",
    imageUrl: "",
    year: 1882,
    region: "Spain",
  },
  {
    id: 3,
    title: "Fallingwater",
    description:
      "Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart Township, Fayette County, Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river.",
    imageUrl: "",
    year: 1935,
    region: "US",
  },
  {
    id: 4,
    title: "Saint Basil's Cathedral",
    description:
      "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
    imageUrl: "",
    year: 1561,
    region: "Russia",
  },
];

const Cards: React.FC = () => {
  return (
    <Container>
      {DUMMY_DATA.map(({ id, title, description, imageUrl, year, region }) => (
        <Card
          key={id}
          title={title}
          description={description}
          imageUrl={imageUrl}
          year={year}
          region={region}
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
