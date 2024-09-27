<<<<<<< HEAD
# Microfrontend-sample-modernjs
Microfrontend demonstration with Modern.js 2

In Modern.js, there are two primary ways of handling routing: file-based routing (automatic) and manual routing (code-defined). Let's clarify why we are using App.tsx with manual routing in the main app, as opposed to the default file-based routing approach.

1. File-Based Routing (Automatic Routing)
In file-based routing, the app automatically maps routes based on the folder and file structure in the src/routes/ directory. For example:

If you have a file src/routes/home.tsx, it will automatically create a route /home.
You don't need to define routes manually in code; Modern.js handles this for you based on file locations.
This approach is easy to use and fits many common use cases where the route structure mirrors the file structure. However, it can become restrictive when you need more complex routing logic or custom behaviors, such as integrating microfrontend sub-applications that require dynamic loading and complex state management.

2. Manual Routing (Code-Defined in App.tsx)
In contrast, manual routing gives you full control over the routing logic. This is particularly useful when working with microfrontends, like in your case with Table and Dashboard sub-apps, because:

Dynamic Sub-App Loading: You need to load microfrontends dynamically from separate applications. This involves using the useModuleApps() hook to fetch and render sub-app components.
Custom Control: You might want custom route logic, such as checking for authentication before loading certain sub-apps, pre-loading data, or controlling when and how the sub-apps are displayed.
Complex Routing: You may have to define nested routes, control parameters, and configure more complex path structures that are not easily handled by file-based routing.
Why Manual Routing in App.tsx for Microfrontends?
Dynamic Loading of Sub-Apps: The useModuleApps() hook dynamically loads sub-apps like Table and Dashboard. In file-based routing, routes are static and cannot dynamically fetch and render components from remote sub-apps. Manual routing allows you to programmatically load these microfrontend apps based on routes.

Microfrontend Integration: Since sub-apps are often developed as independent projects and may have their own internal routing, manual routing lets you define how these microfrontends are integrated into your main application. The <Table /> and <Dashboard /> components are injected dynamically, which isn’t something file-based routing handles well.

More Control: You get more flexibility in handling sub-applications, especially if you need to implement conditions (e.g., authentication or user roles) before loading a sub-app.

When to Use Each Approach:
File-Based Routing: Ideal when your application has a simple, static structure and you don’t need to load content or apps dynamically.
Manual Routing (in App.tsx): Necessary when you're working with microfrontends, dynamic imports, authentication flows, or other custom logic that requires full control over routing.
Summary of Why We Use App.tsx for Manual Routing in MainApp:
Microfrontend Integration: We need dynamic, manual control to load microfrontends.
Dynamic Sub-App Loading: File-based routing doesn’t support dynamic loading of external sub-apps from separate projects.
Custom Control: Manual routing allows for custom route logic, which is essential for advanced scenarios like microfrontends.
=======
# Modern.js App

## Setup

Install the dependencies:

```bash
npm install
```

## Get Started

Start the dev server:

```bash
npm dev
```

Enable optional features or add a new entry:

```bash
npm new
```

Build the app for production:

```bash
npm build
```

Preview the production build locally:

```bash
npm serve
```

For more information, see the [Modern.js documentation](https://modernjs.dev/en).
>>>>>>> 904aef9 (feat: init)
