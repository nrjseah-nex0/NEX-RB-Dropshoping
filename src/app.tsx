import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import DashboardPage from "./pages/dashboard/page.tsx";
import { useServiceWorker } from "@/hooks/use-service-worker.ts";

function AppRoutes() {
  useServiceWorker();
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* Dashboard routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
import Background from "./components/Background";

export default function App() {
  return (
    <>
      <Background />
      {/* باقي الموقع */}
    </>
  );
}
