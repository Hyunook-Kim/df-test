export interface Card {
  id: number;
  title: {
    country: string;
    name: string;
    year: number;
  };
  description: string;
  imageUrl: string;
  imageSrcSet: string;
}
