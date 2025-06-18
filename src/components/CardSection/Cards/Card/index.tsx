import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  year: number;
  region: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  year,
  region,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <MetaInfo>
          <Year>{year}</Year>
          <Region>{region}</Region>
        </MetaInfo>
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
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  color: black;
`;

const Description = styled.p`
  margin: 0 0 16px;
  color: gray;
  line-height: 1.5;
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Year = styled.span`
  color: gray;
`;

const Region = styled.span`
  color: gray;
`;

export default Card;
