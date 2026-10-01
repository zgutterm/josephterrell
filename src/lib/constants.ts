import { FaSpotify, FaInstagram, FaYoutube, FaTiktok, FaBandcamp } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import type { IconType } from "react-icons";

export const BASE_PATH = process.env.NODE_ENV === "production" ? "/josephterrell" : "";

export const ARTIST_NAME = "Joseph Terrell";

export const SITE_URL = "https://zgutterm.github.io/josephterrell";

export const SEATED_ARTIST_ID: string = "b8c45bf9-ae1c-4dee-9fdd-84576413c771";

// Contact addresses — the Contact section stays hidden until at least one is filled in
export const contactEmails: { label: string; email: string }[] = [
  { label: "Booking", email: "" },
  { label: "General", email: "" },
];

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
  { id: "geyaaRPtNuA", title: "Sing No More" },
  { id: "5_DNz8sRoJ4", title: "Hold You In The Light (Live)" },
  { id: "GURdxSBjy5s", title: "Every Dollar" },
  { id: "zimqCpE8gd0", title: "Tallest House of Cards (featuring Charly Lowry)" },
  { id: "LVLUDrEF7YY", title: "Persimmon (Official Video)" },
];

export const navItems = [
  { label: "Music", href: "#music" },
  { label: "Videos", href: "#videos" },
  { label: "Tour", href: "#tour" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
