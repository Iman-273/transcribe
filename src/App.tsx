import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useEffect, useState } from "react";

import RoleSelection from "./pages/roleselection";
//reviewerpages
import ReviewerDashboard from "./pages/reviewerpages/dashboard";
import MyAudios from "./pages/reviewerpages/MyAudios";  


// Client pages
import Dashboard from "./pages/clientpages/Dashboard";
import Settings from "./pages/clientpages/Settings";
import AllFolders from "./pages/clientpages/AllFolders";
import FolderDetail from "./pages/clientpages/FolderDetail";
import TranscriptView from "./pages/clientpages/TranscriptView";
import Templates from "./pages/clientpages/Templates";
import NotFound from "./pages/clientpages/NotFound";


// Admin pages
import AdminDashboard from "./pages/adminpages/dashboard";
import AssignedAudios from "./pages/adminpages/AssignedAudios";
import Payments from "./pages/adminpages/Payments";
import ReviewerManagement from "./pages/adminpages/ReviewerManagement";
import AllFeedbacks from "./pages/reviewerpages/feedback";

const queryClient = new QueryClient();

const App = () => {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setRole(storedRole);
    setLoading(false);
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* ROLE SELECTION */}
            {!role && <Route path="/*" element={<RoleSelection setRole={setRole} />} />}

            {/* ADMIN ROUTES */}
            {role === "admin" && (
              <>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<Navigate to="/admin" replace />} />
               
                <Route path="/reviewermanagement" element={<ReviewerManagement/>} />
                <Route path="/assignedaudios" element={<AssignedAudios/>} />
                <Route path="/payments" element={<Payments/>} />
              </>
            )}

            {/* CLIENT ROUTES */}
            {role === "client" && (
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/audio-files" element={<AllFolders />} />
                <Route path="/audio-files/folder/:id" element={<FolderDetail />} />
                <Route path="/audio-files/transcript/:id" element={<TranscriptView />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            )}

            {/* DEFAULT FALLBACK */}
            {role === "reviewer" && (
              <>
                <Route path="/reviewerdashboard" element={<ReviewerDashboard/>} />
                <Route path="*" element={<Navigate to="/reviewerdashboard" replace />} />
                 <Route path="/myaudios" element={<MyAudios/>} />
                 <Route path="/feedbacks" element={<AllFeedbacks/>} />
                 
               
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
