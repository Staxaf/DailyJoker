export interface IFlags {
  nswf: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}

export interface IJokeResponse {
  error: boolean;
  category: string;
  joke: string;
  setup?: string;
  delivery?: string;
  flags: IFlags;
  id: number;
  safe: boolean;
  lang: string;
}

export type JokeType = Omit<
  IJokeResponse,
  'error' | 'setup' | 'delivery'
> &
  {date: string, isLiked: boolean}
