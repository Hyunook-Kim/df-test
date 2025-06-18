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
  title: string;
  countryOptions: CountryOption[];
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  selectedYearRange: { start: number; end: number };
  onYearRangeChange: (start: number, end: number) => void;
}

const CardSectionHeader: React.FC<CardSectionHeaderProps> = ({
  title,
  countryOptions,
  selectedCountry,
  onCountryChange,
  selectedYearRange,
  onYearRangeChange,
}) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
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
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: var(--surface-primary, #fff);
  padding: 7.5rem 0 6.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-family: var(--font-exo2);
  font-size: 48px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.72px;
  color: var(--text-primary, #000);
  margin: 0 0 3.8rem;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

export default CardSectionHeader;
