import React, { useState } from "react";
import styled from "styled-components";
import { useImage } from "../../hooks/useImage";

export const Subscribe: React.FC = () => {
  const { data: backgroundImage } = useImage();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe email:", email);
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

        <SubscribeForm onSubmit={handleSubmit}>
          <SubscribeFormTitle>Subscribe to our newsletter</SubscribeFormTitle>
          <InputWrapper>
            <EmailInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubmitButton type="submit">
              <SubmitIcon src="/images/svg/paper-plane.svg" alt="Submit" />
            </SubmitButton>
          </InputWrapper>
        </SubscribeForm>
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
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.36px;
  text-align: center;
  color: #fff;
`;

const SubscribeDescription = styled.span`
  width: 100%;
  height: 5.6rem;
  margin: 1.4rem 0 2rem;
  font-size: 18px;
  font-weight: 400;
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
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.21px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

const SubscribeForm = styled.form`
  width: 31.3rem;
  height: 5.3rem;
  margin: 5.9rem 0 0;
`;

const SubscribeFormTitle = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.24px;
  color: #fff;
`;

const InputWrapper = styled.div`
  width: 31.3rem;
  height: 3.1rem;
  margin: 1rem 0 0;
  padding: 0.3rem 0.6rem 0.3rem 0.3rem;
  border-radius: 7px;
  backdrop-filter: blur(10px);
  border: solid 1px #fff;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
`;

const EmailInput = styled.input`
  width: 28.1rem;
  height: 2.6rem;
  margin: 0 0.5rem 0 0;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: #fff;
  }
`;

const SubmitButton = styled.button`
  width: 3.1rem;
  height: 2.6rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const SubmitIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0.3rem 0 0.3rem 0.5rem;
  object-fit: contain;
`;

export default Subscribe;
