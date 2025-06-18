import React, { useEffect, useState } from "react";
import styled from "styled-components";
import type { Profile as ProfileType } from "../../models/profile";
import { getProfiles } from "../../services/profileService";

const Profile: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);

  const fetchProfiles = async (): Promise<void> => {
    const data = await getProfiles();
    setProfiles(data.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <ProfileSection>
      <ProfileContainer>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id}>
            <ProfileImage
              src={profile.imageUrl}
              srcSet={profile.imageSrcSet}
              alt={profile.title}
            />
            <CardTitle>{profile.title}</CardTitle>
            <CardDescription>{profile.description}</CardDescription>
            <LearnMoreButton>LEARN MORE</LearnMoreButton>
          </ProfileCard>
        ))}
      </ProfileContainer>
    </ProfileSection>
  );
};

const ProfileSection = styled.section`
  padding: 2.125rem 5rem 6.875rem;

  @media (max-width: 1600px) {
    padding: 2rem 3rem 5rem;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem 2rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 3rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1600px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 2rem;
  }
`;

const ProfileCard = styled.div`
  flex: 0 1 30%;
  min-width: 280px;
  max-width: 500px;

  @media (max-width: 1400px) {
    flex: 0 1 48%;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 400px;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 6.75rem;
  height: 6.75rem;
  margin-bottom: 2.5rem;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    margin: 0 auto 1.5rem;
    display: block;
  }

  @media (max-width: 480px) {
    width: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
  }
`;

const CardTitle = styled.h3`
  font-family: var(--font-montserrat);
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.36px;
  margin-bottom: 1rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const CardDescription = styled.p`
  font-family: var(--font-montserrat);
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -1.5%;
  margin-bottom: 1.5rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 1rem;
  }
`;

const LearnMoreButton = styled.button`
  font-family: var(--font-exo2);
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.27px;
  text-transform: uppercase;
  color: #18a0fb;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export default Profile;
