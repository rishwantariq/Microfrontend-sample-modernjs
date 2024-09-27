import appTools, { defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

export default defineConfig({
  dev: {
    port: 8081,  // Ensure the TableApp runs on port 8081
  },
  runtime: {
    router: true,  // Enable file-based routing
    state: true,   // Enable state management if necessary
  },
  deploy: {
    microFrontend: true,  // Enable microfrontend
  },
  plugins: [
    garfishPlugin(),  // Enable Garfish plugin for microfrontend
    appTools(),
  ],
});
