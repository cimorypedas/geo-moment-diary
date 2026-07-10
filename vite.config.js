import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),

        VitePWA({
            registerType: "autoUpdate",

            includeAssets: [
                "icon-192.png",
                "icon-512.png"
            ],

            manifest: {
                name: "Geo Moment Diary",
                short_name: "GeoDiary",
                description: "Aplikasi buku harian digital berbasis lokasi.",
                theme_color: "#0d6efd",
                background_color: "#ffffff",
                display: "standalone",
                orientation: "portrait",
                start_url: "/",

                icons: [
                    {
                        src: "icon-192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "icon-512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        })
    ]
});