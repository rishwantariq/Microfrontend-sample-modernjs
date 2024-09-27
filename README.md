Microfrontend Sample with Modern.js
**A demonstration of Microfrontend implementation using Modern.js 2.
**
**_Overview_**
In Modern.js, there are two primary ways to handle routing:

File-Based Routing (Automatic)
Manual Routing (Code-Defined)
This project utilizes manual routing in the main app due to the complexities involved in handling microfrontends like Table and Dashboard sub-apps. Below, we'll explain the key differences and why manual routing is necessary in this scenario.

File-Based Routing (Automatic)
In file-based routing, routes are generated automatically based on the file structure in the src/routes/ directory. For example:

A file at src/routes/home.tsx will automatically create a route /home.
This approach is straightforward and works for simple applications, but it can be restrictive for more complex use cases, such as integrating microfrontends.

Manual Routing (Code-Defined)
In manual routing, developers have full control over route definitions. This flexibility is essential when working with microfrontends due to the need for:

Dynamic Sub-App Loading: The useModuleApps() hook is used to dynamically load and render sub-apps (like Table and Dashboard).
Custom Routing Logic: You can define advanced logic like authentication checks, nested routes, and data pre-loading.
Microfrontend Integration: Since sub-apps may be independent projects, manual routing lets you control how they are integrated and displayed within the main app.
Why Use Manual Routing for Microfrontends?
Dynamic Loading of Sub-Apps: With manual routing, you can load microfrontends dynamically, which is not possible with file-based routing.
Microfrontend Integration: Sub-apps, being independent, may have their own internal routing. Manual routing allows better control over how these sub-apps are injected and managed.
More Control: You have more flexibility to apply advanced logic, such as access control or route conditions, which is often necessary for complex applications.
When to Use Each Approach:
File-Based Routing: Ideal for applications with a simple, static structure.
Manual Routing: Necessary for microfrontends, dynamic imports, or custom routing logic.
Summary
Manual routing is used in this project for:

**_Microfrontend Integration_**: Dynamically loading external sub-apps.
Custom Control: Advanced routing logic and more control over route behavior.
**Getting Started
**Setup
Install the dependencies:

bash
Copy code
npm install
Development Server
Start the development server:

bash
Copy code
npm run dev
Enable Features or Add Entries
Add optional features or new entries with:

bash
Copy code
npm run new
Production Build
Build the app for production:

bash
Copy code
npm run build
Preview Production Build Locally
Preview the production build:

bash
Copy code
npm run serve
Documentation
For more detailed information, check out the Modern.js documentation.
