import React, { useState } from "react";
import styled from "styled-components";

interface EmailFormProps {
  onSubmit?: (email: string) => void;
}

export const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [showValidation, setShowValidation] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();

    const emailIsValid = validateEmail(email);
    setIsValid(emailIsValid);
    setShowValidation(true);

    if (emailIsValid) {
      console.log("Subscribe email:", email);
      onSubmit?.(email);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleSubmit(e);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <SubscribeForm onSubmit={handleSubmit}>
      <SubscribeFormTitle>Subscribe to our newsletter</SubscribeFormTitle>
      <InputWrapper $isValid={isValid} $showValidation={showValidation}>
        <EmailInput
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <SubmitButton type="submit" onClick={handleButtonClick}>
          <SubmitIcon src="/images/svg/paper-plane.svg" alt="Submit" />
        </SubmitButton>
      </InputWrapper>
      {showValidation && isValid === false && (
        <ErrorMessage>Please enter a valid email!</ErrorMessage>
      )}
    </SubscribeForm>
  );
};

const SubscribeForm = styled.form`
  width: 31.3rem;
  height: 5.3rem;
  margin: 5.9rem 0 0;
`;

const SubscribeFormTitle = styled.span`
  font-family: var(--font-exo2);
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.24px;
  text-align: center;
  color: #fff;
`;

const InputWrapper = styled.div<{
  $isValid?: boolean | null;
  $showValidation?: boolean;
}>`
  width: 31.3rem;
  height: 3.1rem;
  margin: 1rem 0 0;
  padding: 0.3rem 0.6rem 0.3rem 0.3rem;
  border-radius: 7px;
  backdrop-filter: blur(10px);
  border: solid 1px
    ${({ $isValid, $showValidation }) => {
      if (!$showValidation) return "#fff";
      if ($isValid === true) return "#4CAF50";
      if ($isValid === false) return "#F44336";
      return "#fff";
    }};
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

const ErrorMessage = styled.div`
  margin: 0.5rem 0 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.21px;
  color: #f44336;
  text-align: left;
`;

export default EmailForm;
