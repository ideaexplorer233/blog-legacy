// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "astro/config";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    // output: "hybrid",
    // adapter: cloudflare(),
    integrations: [
        icon({
            include: {
                "material-symbols": [
                    "search",
                    "person-edit-outline-rounded",
                    "calendar-today-outline-rounded",
                    "edit-calendar-outline-rounded",
                ],
            },
        }),
    ],
    markdown: {
        shikiConfig: {
            theme: "material-theme-ocean",
        },
    },
    image: {
        service: {
            entrypoint: "astro/assets/services/sharp",
            config: {},
        },
    },
    site: "https://example.com", // TODO:change in product version
});
