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
  imageSrcSet: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageSrcSet,
}) => {
  return (
    <Container>
      <Header>
        <Title>{`${title.country}, ${title.name}`}</Title>
        <Year>{title.year}</Year>
      </Header>
      <ImageContainer>
        <Image
          src={imageUrl || undefined}
          srcSet={imageSrcSet}
          alt={title.name}
        />
      </ImageContainer>
      <Content>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 25.9rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  background: var(--background-card, rgba(217, 217, 217, 0.5));
  padding: 0.9rem 1.3rem 1.4rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 14.2rem;
  overflow: hidden;
  margin-bottom: 1.3rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.3rem;
`;

const Content = styled.div`
  padding: 0;
`;

const Title = styled.h3`
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.24px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Year = styled.span`
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
  color: #000;
  padding-left: 0.5rem;
`;

const Description = styled.p`
  font-family: var(--font-montserrat);
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.21px;
  color: #000;
  margin: 0;
`;

export default Card;
