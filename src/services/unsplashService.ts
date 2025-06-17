export type ImageTheme = "nature" | (string & {});

export const fetchImage = async (
  theme: ImageTheme = "nature"
): Promise<string> => {
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM&orientation=landscape&query=${theme}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch from Unsplash API: ${response.status}`);
    }

    const data = await response.json();
    console.log("data:", data);

    // https://unsplash.com/documentation#get-a-random-photo (Response)
    return data.urls.regular;
  } catch (error) {
    console.error("Error fetching from Unsplash:", error);

    const fallbackImage =
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
    return fallbackImage;
  }
};
