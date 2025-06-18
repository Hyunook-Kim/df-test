import React from "react";
import styled from "styled-components";
import RegionFilter from "../Filter/RegionFilter";
import YearRangeFilter from "../Filter/YearRangeFilter";

interface CountryOption {
  id: string;
  label: string;
  value: string;
}

interface CardSectionHeaderProps {
  countryOptions: CountryOption[];
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  selectedYearRange: { start: number; end: number };
  onYearRangeChange: (start: number, end: number) => void;
}

const CardSectionHeader: React.FC<CardSectionHeaderProps> = ({
  countryOptions,
  selectedCountry,
  onCountryChange,
  selectedYearRange,
  onYearRangeChange,
}) => {
  return (
    <Container>
      <Title>Duis tincidunt ut ligula vitae mollis.</Title>
      <FilterContainer>
        <RegionFilter
          options={countryOptions}
          value={selectedCountry}
          onChange={onCountryChange}
        />
        <YearRangeFilter
          startValue={selectedYearRange.start}
          endValue={selectedYearRange.end}
          onChange={onYearRangeChange}
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
