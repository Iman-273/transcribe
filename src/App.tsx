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
import NotFound from "./pages/NotFound";


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
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
               
                <Route path="/admin/reviewermanagement" element={<ReviewerManagement/>} />
                <Route path="/admin/assignedaudios" element={<AssignedAudios/>} />
                <Route path="/admin/payments" element={<Payments/>} />
              </>
            )}

            {/* CLIENT ROUTES */}
            {role === "client" && (
              <Route element={<Layout />}>
                <Route path="/client/dashboard" element={<Dashboard />} />
                <Route path="/client/settings" element={<Settings />} />
                <Route path="/client/audio-files" element={<AllFolders />} />
                <Route path="/client/audio-files/folder/:id" element={<FolderDetail />} />
                <Route path="/client/audio-files/transcript/:id" element={<TranscriptView />} />
                <Route path="/client/templates" element={<Templates />} />
                <Route path="/client/settings" element={<Settings/>} />
                <Route path="*" element={<Navigate to="/client/dashboard" replace />} />
              </Route>
            )}

            {/* DEFAULT FALLBACK */}
            {role === "reviewer" && (
              <>
                <Route path="/reviewer/dashboard" element={<ReviewerDashboard/>} />
                <Route path="*" element={<Navigate to="/reviewer/dashboard" replace />} />
                 <Route path="/reviewer/myaudios" element={<MyAudios/>} />
                 <Route path="/reviewer/feedbacks" element={<AllFeedbacks/>} />
                 
               
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
