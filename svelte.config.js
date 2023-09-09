/* jshint esversion: 11 */

// Imports
import { vitePreprocess } from '@sveltejs/kit/vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Adapters
import adapter from '@sveltejs/adapter-static';

// Custom require function as replacement for the require from the commonJS in ES Module

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $stores: resolve(__dirname, './src/stores'),
      $components: resolve(__dirname, './src/lib/shared/components'),
      $ui: resolve(__dirname, './src/lib/shared/ui'),
      $layouts: resolve(__dirname, './src/lib/layouts'),
      $shared: resolve(__dirname, './src/lib/shared'),
      $models: './src/lib/models',
      $data: resolve(__dirname, './src/lib/data'),
      $core: resolve(__dirname, './src/lib/core'),
      $utils: resolve(__dirname, './src/lib/utils'),
      $environment: resolve(__dirname, './src/environments'),
    },
  },
};

export default config;
