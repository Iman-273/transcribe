import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Eye, EyeOff, User, CreditCard, Check } from "lucide-react";

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);

  const notifications = [
    {
      title: "File Upload Status",
      description: "Be notified when your file upload is complete or fails.",
      settings: { push: true, email: true, sms: false },
    },
    {
      title: "Reviewer Feedback",
      description:
        "Get alerts when a reviewer leaves feedback or comments on your transcription.",
      settings: { push: true, email: false, sms: false },
    },
    {
      title: "Completed Transcription",
      description:
        "Receive updates when your transcription is finalized and ready to download.",
      settings: { push: false, email: false, sms: false },
    },
    {
      title: "Subscription & Billing",
      description: "Notifications about renewals, invoices, and payment issues.",
      settings: { push: false, email: false, sms: false },
    },
    {
      title: "Promotions & Updates (optional)",
      description:
        "Stay informed about new features, offers, and platform news.",
      settings: { push: false, email: false, sms: false },
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <Header />

      <main className="flex-1 px-4 sm:px-6 md:px-10 py-6">
        {/* Page Header */}
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Settings
        </h1>

        {/* Tabs */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="border-b border-gray-200 bg-transparent w-full flex flex-wrap gap-4 sm:gap-6 px-1 mb-5">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 border-blue-600 text-sm sm:text-base font-medium text-gray-600 pb-2"
            >
              Personal Profile
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 border-blue-600 text-sm sm:text-base font-medium text-gray-600 pb-2"
            >
              Billings & Plans
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 border-blue-600 text-sm sm:text-base font-medium text-gray-600 pb-2"
            >
              Notification Settings
            </TabsTrigger>
          </TabsList>

          {/* Personal Profile Tab */}
          <TabsContent value="profile">
            <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-4 sm:p-6">
                {/* Profile Upload Section */}
                <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-xl py-8 sm:py-10 mb-8 bg-white">
                  <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-400" />
                  </div>
                  <Button
                    variant="link"
                    className="text-[#FF7A00] mt-3 text-sm sm:text-base font-medium hover:text-[#FF7A00]/80"
                  >
                    Upload Photo
                  </Button>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Add your Profile Picture here.
                  </p>
                </div>

                {/* Profile Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Taha Janjua"
                      className="h-11 mt-1 text-sm bg-[#FAFBFC] border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="tahajanjua2334@gmail.com"
                      className="h-11 mt-1 text-sm bg-[#FAFBFC] border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="text"
                      defaultValue="+12 43435 5454"
                      className="h-11 mt-1 text-sm bg-[#FAFBFC] border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="relative">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      defaultValue="password"
                      className="h-11 mt-1 text-sm bg-[#FAFBFC] border-gray-200 pr-10 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-[39px] text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end mt-6">
                  <Button className="bg-[#007BFF] hover:bg-[#0066D1] text-white px-6 text-sm font-medium rounded-md h-10">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billings & Plans Tab */}
          <TabsContent value="billing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Pro Plan */}
              <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">Pro Plan</h2>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Our most popular plan for small teams.
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-blue-600 text-2xl sm:text-3xl font-semibold leading-none">
                        $35.10
                      </p>
                      <p className="text-sm text-gray-500 mt-1">/month</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Button
                      variant="outline"
                      className="rounded-full text-xs px-3 py-0.5 h-auto border-blue-100 text-blue-600 font-medium bg-blue-50"
                    >
                      Monthly
                    </Button>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-gray-700">
                    {[
                      "500 minutes of transcription",
                      "Unlimited translation",
                      "Max file size 5GB",
                      "Priority Support",
                      "2 hand-crafted custom content templates",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-end mt-6">
                    <Button
                      variant="link"
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      Upgrade plan →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Right: Payment Method */}
              <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800">Payment method</h2>
                  <p className="text-sm text-gray-500 mb-5">
                    Change how you pay for your plan.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-200 rounded-lg px-4 py-3 mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Visa ending in 1234
                        </p>
                        <p className="text-xs text-gray-500">Expiry 06/2025</p>
                        <p className="text-xs text-gray-500">billing@untitledui.com</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="text-sm font-medium h-8 px-3 border-gray-300 w-full sm:w-auto"
                    >
                      Edit
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-dashed border-gray-300 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  >
                    + Add another Method
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notification Settings Tab */}
          <TabsContent value="notifications">
            <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-0 divide-y divide-gray-200">
                {notifications.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 py-5 gap-4"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <Switch defaultChecked={item.settings.push} />
                        <span className="text-sm text-gray-600">Push</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch defaultChecked={item.settings.email} />
                        <span className="text-sm text-gray-600">Email</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch defaultChecked={item.settings.sms} />
                        <span className="text-sm text-gray-600">SMS</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
