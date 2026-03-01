export const SITE = {
  website: "https://joeyjo233.github.io/",
  author: "Yi Zhou",
  profile: "https://github.com/JoeyJo233",
  desc: "Hello World!",
  title: "yi's space",
  ogImage: "devosfera-og.webp", // located in /public folder
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit this post",
    url: "https://github.com/JoeyJo233/JoeyJo233.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Stockholm", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: true, // show/hide the audio player in hero
    src: "/audio/intro-web.mp3", // path to audio file (relative to /public)
    label: "INTRO.MP3", // display label on the player
    duration: 30, // duration in seconds (for the fixed progress bar)
  },
} as const;
