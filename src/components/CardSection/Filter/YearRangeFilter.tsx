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
    if (year === startValue || year === endValue) {
      onChange(year, year);
    } else if (year < startValue) {
      onChange(year, endValue);
    } else if (year > endValue) {
      onChange(startValue, year);
    } else {
      onChange(startValue, year);
    }
  };

  const getStepPosition = (index: number) => (index / (YEARS.length - 1)) * 100;
  const startPosition = getStepPosition(YEARS.indexOf(startValue));
  const endPosition = getStepPosition(YEARS.indexOf(endValue));

  return (
    <Container>
      <Track>
        <ActiveTrack startPosition={startPosition} endPosition={endPosition} />
      </Track>
      <StepsContainer>
        {YEARS.map((year) => {
          const isActive = year >= startValue && year <= endValue;

          return (
            <Step
              key={year}
              isActive={isActive}
              onClick={() => handleStepClick(year)}
            />
          );
        })}
      </StepsContainer>
      <YearLabels>
        {YEARS.map((year) => (
          <YearLabel
            key={year}
            isActive={year >= startValue && year <= endValue}
          >
            {year}
          </YearLabel>
        ))}
      </YearLabels>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 400px;
  padding: 10px 0;
`;

const Track = styled.div`
  position: relative;
  height: 2px;
  background: lightgray;
  border-radius: 1px;
`;

const ActiveTrack = styled.div<{ startPosition: number; endPosition: number }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.startPosition}%;
  width: ${(props) => props.endPosition - props.startPosition}%;
  height: 2px;
  background: black;
  transform: translateY(-50%);
`;

const StepsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: -12px;
`;

const Step = styled.button<{ isActive: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.isActive ? "black" : "lightgray")};
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.isActive ? "black" : "gray")};
  }
`;

const YearLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const YearLabel = styled.span<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "black" : "gray")};
`;

export default YearRangeFilter;
