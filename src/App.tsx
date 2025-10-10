import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";

import Settings from "./pages/Settings";
import AllFolders from "./pages/AllFolders";
import FolderDetail from "./pages/FolderDetail";

import TranscriptView from "./pages/TranscriptView";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />

            <Route path="/settings" element={<Settings />} />
            <Route path="/audio-files" element={<AllFolders />} />
            <Route path="/audio-files/folder/:id" element={<FolderDetail />} />
        
            <Route path="/audio-files/transcript/:id" element={<TranscriptView />} />
            <Route path="/templates" element={<Templates />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
