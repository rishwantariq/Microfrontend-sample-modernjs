import { useModuleApps } from '@modern-js/plugin-garfish/runtime';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Link, Outlet } from '@modern-js/runtime/router';
import { Button } from './ui/components/Button';
import { buttonVariants } from './ui/components/Button';
import './styles/global.css';  // Import the global styles
import { Alert, AlertDescription, AlertTitle } from "./ui/components/Alert"
import { Rocket, Terminal } from 'lucide-react';

const AppLayout = () => (
  <div className='max-w-6xl mx-10 bg-background'>
    <header>
      <Link className={buttonVariants({ variant: "outline" })} to="/dashboard">Dashboard</Link>
      <Link className={buttonVariants({ variant: "outline" })} to="/table">Table - Sub App 1</Link>
      <Link className={buttonVariants({ variant: "outline" })} to="/">Home</Link>
    </header>
    <div className='my-5'>
    <Alert>
        <Rocket className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            You can add components and dependencies to your app using the cli.
        </AlertDescription>
    </Alert>
    </div>
    <Outlet />  {/* Renders the matched route's content (Table or Dashboard) */}
  </div>
);

export default function App() {
  const { Table, Dashboard } = useModuleApps();  // Load Table and Dashboard sub-apps

  // Define routes manually
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="table/*" element={<Table />} />  {/* Route for Table sub-app */}
        <Route path="dashboard/*" element={<Dashboard />} />  {/* Route for Dashboard sub-app */}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}
