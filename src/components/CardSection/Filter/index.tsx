import React from "react";
import styled from "styled-components";

interface FilterOption {
  id: string | number;
  label: string;
  value: string | number;
}

interface FilterProps {
  options: FilterOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  type: "button" | "range";
  min?: number;
  max?: number;
}

const Filter: React.FC<FilterProps> = ({
  options,
  value,
  onChange,
  type,
  min = 1000,
  max = 2000,
}) => {
  if (type === "button") {
    return (
      <ButtonGroup>
        {options.map((option) => (
          <FilterButton
            key={option.id}
            isActive={value === option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </FilterButton>
        ))}
      </ButtonGroup>
    );
  }

  const position = ((Number(value) - min) / (max - min)) * 100;

  return (
    <RangeContainer>
      <RangeTrack />
      <RangeInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <RangeThumb position={position} />
      <RangeLabels>
        <span>{min}</span>
        <span>{max}</span>
      </RangeLabels>
    </RangeContainer>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#1A1A1A")};
  background: ${(props) => (props.isActive ? "#1A1A1A" : "transparent")};
  border: 1px solid ${(props) => (props.isActive ? "#1A1A1A" : "#E5E5E5")};
  border-radius: 10rem;
  cursor: pointer;
  padding: 0.8rem 2rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1a1a1a;
  }
`;

const RangeContainer = styled.div`
  position: relative;
  width: 40rem;
  padding: 1rem 0;
`;

const RangeTrack = styled.div`
  position: relative;
  height: 0.2rem;
  background: #e5e5e5;
  border-radius: 0.1rem;
`;

const RangeInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const RangeThumb = styled.div<{ position: number }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.position}%;
  width: 2.4rem;
  height: 2.4rem;
  background: #1a1a1a;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const RangeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  color: #666666;
  font-size: 1.4rem;
`;

export default Filter;
