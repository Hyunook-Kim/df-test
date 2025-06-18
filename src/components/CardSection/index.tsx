import React, { useMemo, useState } from "react";
import styled from "styled-components";
import CardSectionHeader from "./CardSectionHeader";
import Cards from "./Cards";
import type { Card } from "../../models/card";

// Cards/index.tsx 에 있던 더미 데이터를 CardSection으로 이동
const DUMMY_CARDS: Card[] = [
  {
    id: 1,
    title: {
      country: "Italy",
      name: "The Leaning Tower of Pisa",
      year: 1173,
    },
    description:
      "The Leaning Tower of Pisa, or simply the Tower of Pisa (Torre di Pisa) is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa Cathedral Square (Piazza del Duomo).",
    imageUrl: "",
    imageSrcSet: "",
  },
  {
    id: 2,
    title: {
      country: "Spain",
      name: "Sagrada Familia",
      year: 1882,
    },
    description:
      "The Basilica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Familia, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852-1926), in 2010 it was consecrated by Pope Benedict XVI.",
    imageUrl: "",
    imageSrcSet: "",
  },
  {
    id: 3,
    title: {
      country: "USA",
      name: "Fallingwater",
      year: 1935,
    },
    description:
      "Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart Township, Fayette County, Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river.",
    imageUrl: "",
    imageSrcSet: "",
  },
  {
    id: 4,
    title: {
      country: "Russia",
      name: "Saint Basil's Cathedral",
      year: 1561,
    },
    description:
      "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
    imageUrl: "",
    imageSrcSet: "",
  },
];

const countryOptions = [
  { id: "all", label: "All", value: "all" },
  { id: "italy", label: "Italy", value: "italy" },
  { id: "spain", label: "Spain", value: "spain" },
  { id: "usa", label: "USA", value: "usa" },
  { id: "russia", label: "Russia", value: "russia" },
];

const CardSection: React.FC = () => {
  const [cards] = useState<Card[]>(DUMMY_CARDS);
  const [country, setCountry] = useState("all");
  const [yearRange, setYearRange] = useState({ start: 1000, end: 2000 });

  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      const isCountryMatch =
        country === "all" || card.title.country.toLowerCase() === country;
      const isYearMatch =
        card.title.year >= yearRange.start && card.title.year <= yearRange.end;
      return isCountryMatch && isYearMatch;
    });
  }, [cards, country, yearRange]);

  const handleCountryChange = (selectedCountry: string) => {
    setCountry(selectedCountry);
  };

  const handleYearRangeChange = (start: number, end: number) => {
    setYearRange({ start, end });
  };

  return (
    <Container>
      <CardSectionHeader
        countryOptions={countryOptions}
        selectedCountry={country}
        onCountryChange={handleCountryChange}
        selectedYearRange={yearRange}
        onYearRangeChange={handleYearRangeChange}
      />
      <Cards cards={filteredCards} />
    </Container>
  );
};

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
`;

export default CardSection;
