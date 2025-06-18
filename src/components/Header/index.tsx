import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderSection>
      <HeaderTextBox>Snap photos and share like never before</HeaderTextBox>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  display: flex;
  padding-left: 5rem;
  background-color: lightblue;
`;

const HeaderTextBox = styled.div`
  width: 46.875rem;
  height: 9rem;
  font-size: 48px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: -0.72px;
  text-align: left;
  color: #000;
`;

export default Header;
