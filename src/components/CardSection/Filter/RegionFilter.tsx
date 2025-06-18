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
          $isActive={value === option.value}
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
  gap: 0.3rem;
  padding: 0.3rem;
  border-radius: 1.6rem;
  border: 1px solid var(--border-primary, rgba(0, 0, 0, 0.5));
  background-color: var(--surface-primary, #fff);
`;

const FilterButton = styled.button<{ $isActive: boolean }>`
  height: 2.5rem;
  padding: 0 1.3rem;
  border-radius: 1.6rem;
  border: none;
  cursor: pointer;

  font-family: var(--font-exo2);
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
  text-transform: capitalize;

  color: ${(props) =>
    props.$isActive
      ? "var(--surface-primary, #fff)"
      : "var(--text-primary, #000)"};
  background: ${(props) =>
    props.$isActive ? "var(--text-primary, #000)" : "transparent"};

  transition: all 0.2s ease-in-out;
`;

export default RegionFilter;
