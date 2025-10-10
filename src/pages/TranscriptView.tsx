import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Copy, Share2, Clock, FileAudio } from "lucide-react";

export default function TranscriptView() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header showBack />
      
      <main className="flex-1 space-y-6 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Assignment Preview</h1>
            <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <FileAudio className="h-4 w-4" />
                <span>120mb</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>35min</span>
              </div>
              <Badge className="bg-success/10 text-success hover:bg-success/20">Completed</Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transcript</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <span className="text-muted-foreground">[00:00:00]</span> Hi, my name is Jack Mor and I'll be presenting the quarterly report for our team today. Let me start by giving you an overview of our accomplishments over the past three months.
              </p>
              <p>
                <span className="text-muted-foreground">[00:00:15]</span> First, I'd like to highlight that we've successfully completed all major project milestones ahead of schedule. This was possible due to the exceptional collaboration between our development and design teams.
              </p>
              <p>
                <span className="text-muted-foreground">[00:00:30]</span> Our customer satisfaction scores have improved by 23% compared to last quarter. This improvement can be attributed to the enhanced support system we implemented and the faster response times we've achieved.
              </p>
              <p>
                <span className="text-muted-foreground">[00:00:45]</span> Looking at the financial metrics, revenue has grown by 18% quarter-over-quarter, which exceeds our initial projections by 5%. This growth was driven primarily by our expansion into new markets and the successful launch of our premium tier.
              </p>
              <p>
                <span className="text-muted-foreground">[00:01:00]</span> In terms of product development, we've released three major features that our users have been requesting. The feedback has been overwhelmingly positive, with a 4.8 out of 5 rating across all platforms.
              </p>
              <p>
                <span className="text-muted-foreground">[00:01:15]</span> For the upcoming quarter, we're planning to focus on scalability improvements and introducing AI-powered features that will significantly enhance user experience. We're also looking at strategic partnerships that could help us expand our reach.
              </p>
              <p>
                <span className="text-muted-foreground">[00:01:30]</span> I want to thank everyone on the team for their hard work and dedication. These results wouldn't have been possible without your commitment to excellence. Let's continue this momentum into the next quarter.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
