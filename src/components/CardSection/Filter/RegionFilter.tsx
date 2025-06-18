import React from "react";
import styled from "styled-components";

interface RegionOption {
  id: string;
  label: string;
  value: string;
}

interface RegionFilterProps {
  options: RegionOption[];
  value: string;
  onChange: (value: string) => void;
}

const RegionFilter: React.FC<RegionFilterProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <Container>
      {options.map((option) => (
        <FilterButton
          key={option.id}
          isActive={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 12px;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "white" : "black")};
  background: ${(props) => (props.isActive ? "black" : "transparent")};
  border: 1px solid ${(props) => (props.isActive ? "black" : "none")};
  border-radius: 100px;
  cursor: pointer;
  padding: 8px 20px;
`;

export default RegionFilter;
