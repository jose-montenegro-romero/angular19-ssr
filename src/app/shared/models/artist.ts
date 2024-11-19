export interface External_url {
  spotify: string;
}

export interface Follower {
  href: string;
  total: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface IArtist {
  external_urls?: External_url;
  followers?: Follower;
  genres?: string[];
  href?: string;
  id?: string;
  images: Image[];
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
}
