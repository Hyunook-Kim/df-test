import React, { useState } from "react";
import styled from "styled-components";
import RegionFilter from "../Filter/RegionFilter";
import YearRangeFilter from "../Filter/YearRangeFilter";

const regionOptions = [
  { id: "all", label: "All", value: "all" },
  { id: "asia", label: "Asia", value: "asia" },
  { id: "europe", label: "Europe", value: "europe" },
  { id: "america", label: "America", value: "america" },
  { id: "oceania", label: "Oceania", value: "oceania" },
];

const CardSectionHeader: React.FC = () => {
  const [region, setRegion] = useState("all");
  const [yearRange, setYearRange] = useState({ start: 1000, end: 1300 });

  return (
    <Container>
      <Title>Duis tincidunt ut ligula vitae mollis.</Title>
      <FilterContainer>
        <RegionFilter
          options={regionOptions}
          value={region}
          onChange={setRegion}
        />
        <YearRangeFilter
          startValue={yearRange.start}
          endValue={yearRange.end}
          onChange={(start, end) => setYearRange({ start, end })}
        />
      </FilterContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-weight: 700;
  color: black;
  margin-bottom: 24px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export default CardSectionHeader;
