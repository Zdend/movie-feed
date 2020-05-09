export enum ProgramType {
  SERIES = 'series',
  MOVIE = 'movie',
  DOCUMENTARY = 'documentary',
}

export interface TitleImage {
  url: string;
  width: number;
  height: number;
}

export interface ImageGallery {
  'Poster Art': TitleImage;
}

export interface Title {
  title: string;
  description: string;
  programType: ProgramType;
  images: ImageGallery;
  releaseYear: number;
}

export interface FeedResponse {
  total: number;
  entries: Title[];
}