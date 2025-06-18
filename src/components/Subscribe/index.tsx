import React from "react";
import styled from "styled-components";
import { useImage } from "../../hooks/useImage";
import EmailForm from "./EmailForm";

export const Subscribe: React.FC = () => {
  const { data: backgroundImage } = useImage();

  const handleEmailSubmit = (email: string) => {
    console.log("Newsletter subscription:", email);
  };

  return (
    <SubscribeSection $backgroundImage={backgroundImage || ""}>
      <SubscribeOverlay>
        <SubscribeContent>
          <SubscribeTitle>Sed ut perspiciatis unde omnis</SubscribeTitle>
          <SubscribeDescription>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </SubscribeDescription>
          <Divider />
          <SubscribeSubText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore.
          </SubscribeSubText>
        </SubscribeContent>

        <EmailForm onSubmit={handleEmailSubmit} />
      </SubscribeOverlay>
    </SubscribeSection>
  );
};

const SubscribeSection = styled.section<{ $backgroundImage: string }>`
  width: 100%;
  height: 46.3rem;
  margin: 6.9rem 0 0;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const SubscribeOverlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 9.5rem 5rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubscribeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95rem;
  width: 100%;
`;

const SubscribeTitle = styled.span`
  width: 100%;
  height: 2.3rem;
  margin: 0 0 1.4rem;
  font-family: var(--font-montserrat);
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.36px;
  text-align: center;
  color: #fff;
`;

const SubscribeDescription = styled.span`
  width: 100%;
  height: 5.6rem;
  margin: 1.4rem 0 2rem;
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.27px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 2rem 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

const SubscribeSubText = styled.span`
  width: 100%;
  height: 2.7rem;
  margin: 2rem 0 0;
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.21px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

export default Subscribe;
