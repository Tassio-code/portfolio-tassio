import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://tassio-code.github.io/portfolio-tassio',
  base: '/portfolio-tassio',
  adapter: github(),
});


