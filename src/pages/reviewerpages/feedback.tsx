import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, ArrowUpDown, MessageSquare, UserCircle } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

interface Feedback {
  id: number;
  author: string;
  title: string;
  message: string;
  date: string;
  status: "Resolved" | "Unresolved";
}

const AllFeedbacks: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [activeTab, setActiveTab] = useState<"All" | "Resolved" | "Unresolved">(
    "All"
  );

  const loadDummyData = () => {
    setFeedbacks([
      {
        id: 1,
        author: "Admin Sara",
        title: "Interview Recording 001",
        message:
          "Great work on this transcription! The accuracy is excellent. Just a small note – please ensure speaker labels are consistent throughout.",
        date: "10/13/2025, 2:30:09 PM",
        status: "Resolved",
      },
      {
        id: 2,
        author: "Admin Sara",
        title: "Interview Recording 002",
        message:
          "Excellent formatting! Please double-check speaker labeling for consistency.",
        date: "10/14/2025, 4:10:20 PM",
        status: "Resolved",
      },
      {
        id: 3,
        author: "Admin Sara",
        title: "Interview Recording 003",
        message:
          "Overall great work. There are a few minor timing mismatches to fix.",
        date: "10/15/2025, 11:05:45 AM",
        status: "Unresolved",
      },
    ]);
  };

  const filteredFeedbacks =
    activeTab === "All"
      ? feedbacks
      : feedbacks.filter((f) => f.status === activeTab);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-3">
            <h2 className="text-lg font-semibold text-gray-800">
              All Feedbacks
            </h2>

            {/* Buttons inline, no stretching */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="flex items-center gap-1 text-sm text-gray-700 whitespace-nowrap"
              >
                <Filter className="w-4 h-4" />
                Filter
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-1 text-sm text-gray-700 whitespace-nowrap"
              >
                <ArrowUpDown className="w-4 h-4" />
                Sort
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-4 border-b border-gray-200">
            {["All", "Resolved", "Unresolved"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Load Dummy Data Button */}
          <div className="mb-4">
            <Button
              onClick={loadDummyData}
              className="bg-blue-600 text-white w-full sm:w-auto"
            >
              Load Dummy Data
            </Button>
          </div>

          {/* Feedback List / Empty State */}
          {filteredFeedbacks.length === 0 ? (
            <Card className="w-full h-[60vh] flex items-center justify-center bg-white shadow-sm">
              <CardContent className="text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <MessageSquare className="w-12 h-12 text-gray-300" />
                  <p className="text-gray-500 font-medium">
                    No Feedbacks to show!
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 sm:gap-6 md:grid-cols-1">
              {filteredFeedbacks.map((feedback) => (
                <Card
                  key={feedback.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      <div className="flex gap-3">
                        <UserCircle className="w-8 h-8 text-blue-500 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {feedback.author}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {feedback.title}
                          </p>
                          <p className="mt-2 text-gray-700 text-sm leading-snug">
                            “{feedback.message}”
                          </p>
                          <p className="mt-2 text-xs text-gray-400">
                            {feedback.date}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full self-start sm:self-auto ${
                          feedback.status === "Resolved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {feedback.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AllFeedbacks;
