import React from "react";
import styled from "styled-components";

interface CardProps {
  title: {
    country: string;
    name: string;
    year: number;
  };
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <Container>
      <Header>
        <Title>{`${title.country}, ${title.name}`}</Title>
        <Year>{title.year}</Year>
      </Header>
      <ImageContainer>
        <Image src={imageUrl || undefined} alt={title.name} />
      </ImageContainer>
      <Content>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 280px;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Year = styled.span`
  font-size: 14px;
  padding-left: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0;
`;

export default Card;
