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

export interface Copyright {
  text: string;
  type: string;
}

export interface External_id {
  upc: string;
}

export interface External_url {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
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

export interface External_url {
  spotify: string;
}
export interface Linked_from {
  external_urls: External_url;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface Track {
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: External_url;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  linked_from: Linked_from;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
