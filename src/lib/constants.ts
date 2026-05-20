import { FaSpotify, FaInstagram, FaYoutube, FaTiktok, FaBandcamp } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const BASE_PATH = process.env.NODE_ENV === "production" ? "/josephterrell" : "";

export const ARTIST_NAME = "Joseph Terrell";

export const SEATED_ARTIST_ID = "ARTIST_ID_HERE";

// Spotify embed URI — can be an artist, album, or playlist
// e.g. "artist/1234", "album/5678", "playlist/abcd"
export const SPOTIFY_EMBED_URI = "artist/18MwhgwFRDilBqLZEoHhtQ";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  { name: "Spotify", url: "https://open.spotify.com/artist/18MwhgwFRDilBqLZEoHhtQ", icon: FaSpotify },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/joseph-terrell/1672093547", icon: SiApplemusic },
  { name: "Bandcamp", url: "https://josephterrell.bandcamp.com/", icon: FaBandcamp },
  { name: "Instagram", url: "https://www.instagram.com/jomoterrell/", icon: FaInstagram },
  { name: "YouTube", url: "https://www.youtube.com/@joseph_terrell", icon: FaYoutube },
  { name: "TikTok", url: "https://www.tiktok.com/@jomoterrell", icon: FaTiktok },
];

export const streamingLinks = [
  { name: "Spotify", url: "https://open.spotify.com/artist/18MwhgwFRDilBqLZEoHhtQ" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/joseph-terrell/1672093547" },
  { name: "Amazon Music", url: "https://music.amazon.com/artists/B01N6FBUI5/joseph-terrell" },
  { name: "Tidal", url: "https://tidal.com/artist/12975723/" },
  { name: "Bandcamp", url: "https://josephterrell.bandcamp.com/" },
];

export const videos = [
  { id: "geyaaRPtNuA" },
  { id: "5_DNz8sRoJ4" },
  { id: "GURdxSBjy5s" },
  { id: "zimqCpE8gd0" },
  { id: "LVLUDrEF7YY" },
];

export const navItems = [
  { label: "Music", href: "#music" },
  { label: "Videos", href: "#videos" },
  { label: "Tour", href: "#tour" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
