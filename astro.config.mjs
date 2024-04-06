// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(
      {
        include: {
          "material-symbols": [
              "search",
              "person-edit-outline-rounded",
              "calendar-today-outline-rounded",
              "edit-calendar-outline-rounded"
          ]
        }
      }
  )]
});