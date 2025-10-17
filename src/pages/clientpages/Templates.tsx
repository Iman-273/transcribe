import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { FileText, Clock, AlignLeft, List } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Clean Paragraphs",
    description: "Neatly formatted text for reports & documents.",
    icon: AlignLeft,
    default: true,
  },
  {
    id: 2,
    name: "With Timestamps",
    description: "Transcript includes timecodes every 30 seconds.",
    icon: Clock,
    default: false,
  },
  {
    id: 3,
    name: "Speaker Labeled",
    description: "Dialogues separated with Speaker 1, Speaker 2.",
    icon: List,
    default: false,
  },
  {
    id: 4,
    name: "Subtitle (SRT)",
    description: "Transcript formatted for video subtitles.",
    icon: FileText,
    default: false,
  },
];

export default function Templates() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFC]">
      <Header breadcrumb="Templates" />

      <main className="flex-1 space-y-6 p-6">
        {/* Page Header */}
        <h1 className="text-[22px] font-semibold text-gray-900">
          All Templates
        </h1>

        {/* Template List */}
        <div className="space-y-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-5 py-4 hover:shadow-sm transition-all"
            >
              {/* Left section: icon + text */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F0FF]">
                  <template.icon className="h-6 w-6 text-[#007BFF]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{template.name}</p>
                  <p className="text-sm text-gray-500">
                    {template.description}
                  </p>
                </div>
              </div>

              {/* Right section: button or badge */}
              {template.default ? (
                <div className="text-sm font-medium text-gray-500 border border-gray-200 px-4 py-1.5 rounded-md bg-gray-50">
                  Default
                </div>
              ) : (
                <Button
                  size="sm"
                  className="bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-medium px-4 py-2 rounded-md"
                >
                  Set as Default
                </Button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
