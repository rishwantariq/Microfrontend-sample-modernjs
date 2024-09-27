import appTools, { defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';
import tailwindcssPlugin from '@modern-js/plugin-tailwindcss';

export default defineConfig({
  runtime: {
    router: true,  // Enable routing in main app
    state: true,   // Enable state management
    dev: {
      port: 8080,  // Ensure the TableApp runs on port 8081
    },
    masterApp: {   // Define sub-applications for microfrontend
      apps: [
        {
          name: 'Table',
          entry: 'http://localhost:8081',  // Entry URL for Table sub-app
          activeWhen: '/table',            // Route to activate Table sub-app
        },
        {
          name: 'Dashboard',
          entry: 'http://localhost:8082',  // Entry URL for Dashboard sub-app
          activeWhen: '/dashboard',        // Route to activate Dashboard sub-app
        },
      ],
    },
  },
  plugins: [
    garfishPlugin(),   // Plugin for microfrontend management
    tailwindcssPlugin(),
    appTools(),
  ],
});
