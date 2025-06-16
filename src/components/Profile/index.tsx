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
  margin: 2.125rem 5rem 6.875rem;
`;

const ProfileContainer = styled.div`
  width: 95rem;
  height: 22rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 0;
`;

const ProfileCard = styled.div`
  width: 30.8125rem;
  height: 22rem;
  flex-grow: 0;
`;

const ProfileImage = styled.img`
  width: 6.75rem;
  height: 6.75rem;
  margin: 0 24.0625rem 2.5rem 0;
  object-fit: contain;
  border-radius: 50%;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.36px;
  margin-bottom: 1rem;
  color: #000;
`;

const CardDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.27px;
  margin-bottom: 1.5rem;
  color: #000;
`;

const LearnMoreButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.27px;
  text-transform: uppercase;
  color: #18a0fb;
`;

export default Profile;
