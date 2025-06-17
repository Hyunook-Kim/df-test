import { useState, useEffect } from "react";
import { fetchImage } from "../services/unsplashService";
import type { ImageTheme } from "../services/unsplashService";

export const useImage = (theme: ImageTheme = "nature") => {
  const CACHE_KEY = `background_image_${theme}`;

  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      setLoading(true);
      try {
        const cachedImage = localStorage.getItem(CACHE_KEY);

        if (cachedImage) {
          setData(cachedImage);
        } else {
          const fetchedImage = await fetchImage(theme);
          localStorage.setItem(CACHE_KEY, fetchedImage);
          setData(fetchedImage);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [theme]);

  return { data, loading, error };
};
