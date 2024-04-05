import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from '@astrojs/react';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({
    experimentalReactChildren: true
  }), icon()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});