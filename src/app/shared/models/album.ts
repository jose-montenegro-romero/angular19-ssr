export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: External_url;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: Artist[];
}

export interface External_url {
  spotify: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface External_url {
  spotify: string;
}

export interface Artist {
  external_urls: External_url;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
