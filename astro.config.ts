// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "astro/config";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    output: "hybrid",
    adapter: cloudflare(),
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
        svelte(),
        sitemap({
            filter: (page) => !page.endsWith("secret-page"),
            i18n: {
                defaultLocale: "en",
                locales: {
                    en: "en-US",
                    zh: "zh-Hans-CN",
                },
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
    i18n: {
        defaultLocale: "en",
        locales: ["es", "zh"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    site: "https://example.com", // TODO:change in product release
});
