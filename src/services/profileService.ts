import type { Profile } from "../models/profile";

export const getProfiles = async (): Promise<Profile[]> => {
  // TODO: Replace profileData with data fetched from mocks
  const profiles: Profile[] = [
    {
      id: 1,
      title: "Sed ut perspiciatis",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
      imageUrl: "/images/profiles/profile-1.png",
      imageSrcSet:
        "/images/profiles/profile-1-2x.png 2x, /images/profiles/profile-1-3x.png 3x",
    },
    {
      id: 2,
      title: "ipsum dolor",
      description:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      imageUrl: "/images/profiles/profile-2.png",
      imageSrcSet:
        "/images/profiles/profile-2-2x.png 2x, /images/profiles/profile-2-3x.png 3x",
    },
    {
      id: 3,
      title: "Nemo enim ipsam",
      description:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      imageUrl: "/images/profiles/profile-3.png",
      imageSrcSet:
        "/images/profiles/profile-3-2x.png 2x, /images/profiles/profile-3-3x.png 3x",
    },
  ];

  return profiles;
};
