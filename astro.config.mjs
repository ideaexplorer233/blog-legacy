// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [icon({
    include: {
      "material-symbols": ["search", "person-edit-outline-rounded", "calendar-today-outline-rounded", "edit-calendar-outline-rounded"]
    }
  })],
  adapter: cloudflare()
});