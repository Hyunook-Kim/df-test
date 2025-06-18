import React from "react";
import styled from "styled-components";

interface YearRangeFilterProps {
  startValue: number;
  endValue: number;
  onChange: (start: number, end: number) => void;
}

const YEARS = [1000, 1300, 1700, 2000];

const YearRangeFilter: React.FC<YearRangeFilterProps> = ({
  startValue,
  endValue,
  onChange,
}) => {
  const handleStepClick = (year: number) => {
    if (year < startValue) {
      onChange(year, endValue);
    } else if (year > endValue) {
      onChange(startValue, year);
    } else {
      const startDist = year - startValue;
      const endDist = endValue - year;
      if (startDist <= endDist) {
        onChange(year, endValue);
      } else {
        onChange(startValue, year);
      }
    }
  };

  const getStepPosition = (year: number) =>
    (YEARS.indexOf(year) / (YEARS.length - 1)) * 100;

  const startPosition = getStepPosition(startValue);
  const endPosition = getStepPosition(endValue);

  return (
    <Container>
      <RangeWrapper>
        <Track />
        <ActiveTrack
          $startPosition={startPosition}
          $endPosition={endPosition}
        />
        <StepsContainer>
          {YEARS.map((year) => {
            const isActive = year >= startValue && year <= endValue;
            return (
              <Step
                key={year}
                $isActive={isActive}
                onClick={() => handleStepClick(year)}
              >
                {year}
              </Step>
            );
          })}
        </StepsContainer>
      </RangeWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 25.5rem;
  height: 3.1rem;
  padding: 0.3rem;
  border-radius: 1.6rem;
  border: 1px solid var(--border-primary, rgba(0, 0, 0, 0.5));
  background-color: var(--surface-primary, #fff);
  display: flex;
  align-items: center;
`;

const RangeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Track = styled.div`
  position: absolute;
  width: 100%;
  height: 0.6rem;
  background: var(--surface-tertiary, #e0e0e0);
  border-radius: 0.3rem;
`;

const ActiveTrack = styled.div<{
  $startPosition: number;
  $endPosition: number;
}>`
  position: absolute;
  left: ${(props) => props.$startPosition}%;
  width: ${(props) => props.$endPosition - props.$startPosition}%;
  height: 0.6rem;
  background: var(--text-primary, #000);
`;

const StepsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Step = styled.button<{ $isActive: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-exo2);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.21px;

  color: var(--surface-primary, #fff);
  background: ${(props) =>
    props.$isActive
      ? "var(--text-primary, #000)"
      : "var(--surface-tertiary, #e0e0e0)"};

  transition: all 0.2s ease-in-out;
`;

export default YearRangeFilter;
