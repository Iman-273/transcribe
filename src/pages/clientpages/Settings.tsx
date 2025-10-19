import { useState, useEffect } from "react";
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

  // ✅ Disable page scroll entirely
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const notifications = [
    {
      title: "File Upload Status",
      description: "Be notified when your file upload is complete or fails.",
      settings: { push: true, email: true, sms: false },
    },
    {
      title: "Reviewer Feedback",
      description: "Get alerts when a reviewer leaves feedback or comments.",
      settings: { push: true, email: false, sms: false },
    },
    {
      title: "Completed Transcription",
      description: "Receive updates when your transcription is ready.",
      settings: { push: false, email: false, sms: false },
    },
    {
      title: "Subscription & Billing",
      description: "Notifications about renewals, invoices, and payments.",
      settings: { push: false, email: false, sms: false },
    },
    {
      title: "Promotions & Updates (optional)",
      description: "Stay informed about new features and offers.",
      settings: { push: false, email: false, sms: false },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] overflow-hidden">
      <Header />

      <main
        className="
          flex-1 flex flex-col items-center justify-center
          px-3 sm:px-6 md:px-10 py-5 sm:py-8 md:py-10
          w-full max-w-[1300px] mx-auto
        "
      >
        {/* Page Header */}
        <h1 className="text-[20px] sm:text-[24px] font-semibold text-gray-800 mb-5 text-center sm:text-left w-full">
          Settings
        </h1>

        {/* Tabs */}
        <Tabs defaultValue="profile" className="w-full h-full">
          {/* Tabs Navigation */}
          <TabsList
            className="
              border-b border-gray-200 bg-transparent w-full 
              flex justify-start sm:justify-center md:justify-start gap-5 sm:gap-10 
              px-1 mb-6 overflow-x-auto scrollbar-hide
            "
          >
            <TabsTrigger
              value="profile"
              className="
                data-[state=active]:text-blue-600 
                data-[state=active]:border-b-2 border-blue-600 
                text-sm sm:text-base font-medium text-gray-600 pb-2 whitespace-nowrap
              "
            >
              Personal Profile
            </TabsTrigger>

            <TabsTrigger
              value="billing"
              className="
                data-[state=active]:text-blue-600 
                data-[state=active]:border-b-2 border-blue-600 
                text-sm sm:text-base font-medium text-gray-600 pb-2 whitespace-nowrap
              "
            >
              Billings & Plans
            </TabsTrigger>

            <TabsTrigger
              value="notifications"
              className="
                data-[state=active]:text-blue-600 
                data-[state=active]:border-b-2 border-blue-600 
                text-sm sm:text-base font-medium text-gray-600 pb-2 whitespace-nowrap
              "
            >
              Notification Settings
            </TabsTrigger>
          </TabsList>

          {/* Personal Profile */}
          <TabsContent value="profile" className="animate-fadeIn">
            <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-4 sm:p-6 md:p-8">
                {/* Profile Upload */}
                <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-xl py-8 sm:py-10 mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-gray-300 flex items-center justify-center">
                    <User className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
                  </div>
                  <Button
                    variant="link"
                    className="text-[#FF7A00] mt-3 text-sm sm:text-base font-medium hover:text-[#FF7A00]/80"
                  >
                    Upload Photo
                  </Button>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 text-center">
                    Add your profile picture.
                  </p>
                </div>

                {/* Profile Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Taha Janjua"
                      className="h-10 mt-1 text-sm bg-[#FAFBFC] border-gray-200 focus:ring-blue-500"
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
                      className="h-10 mt-1 text-sm bg-[#FAFBFC] border-gray-200 focus:ring-blue-500"
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
                      className="h-10 mt-1 text-sm bg-[#FAFBFC] border-gray-200 focus:ring-blue-500"
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
                      className="h-10 mt-1 text-sm bg-[#FAFBFC] border-gray-200 pr-10 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
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

                {/* Save Button */}
                <div className="flex justify-end mt-6">
                  <Button className="bg-[#007BFF] hover:bg-[#0066D1] text-white text-sm sm:text-base font-medium px-6 py-2 rounded-md">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billings & Plans */}
          <TabsContent value="billing" className="animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
              {/* Left: Pro Plan */}
              <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <CardContent className="p-5 sm:p-6 flex flex-col justify-between h-full">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">Pro Plan</h2>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Perfect for small teams and pros.
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 text-3xl font-semibold leading-none">
                        $35.10
                      </p>
                      <p className="text-sm text-gray-500 mt-1">/month</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Button
                      variant="outline"
                      className="rounded-full text-xs px-3 py-1 h-auto border-blue-100 text-blue-600 font-medium bg-blue-50"
                    >
                      Monthly
                    </Button>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm text-gray-700">
                    {[
                      "500 minutes of transcription",
                      "Unlimited translation",
                      "Max file size 5GB",
                      "Priority support",
                      "2 custom templates",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" /> {feature}
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
                <CardContent className="p-5 sm:p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">Payment Method</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Manage your payment preferences.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 rounded-lg px-4 py-3 mb-4">
                    <div className="flex items-center gap-3 mb-3 sm:mb-0">
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
                      className="text-xs sm:text-sm font-medium h-8 px-3 border-gray-300"
                    >
                      Edit
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-dashed border-gray-300 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  >
                    + Add Another Method
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="animate-fadeIn">
            <Card className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardContent className="p-0 divide-y divide-gray-200">
                {notifications.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 py-4 sm:py-5"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">{item.description}</p>
                    </div>

                    <div className="flex gap-4 mt-3 md:mt-0">
                      {["Push", "Email", "SMS"].map((label, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Switch
                            defaultChecked={
                              idx === 0
                                ? item.settings.push
                                : idx === 1
                                ? item.settings.email
                                : item.settings.sms
                            }
                          />
                          <span className="text-xs sm:text-sm text-gray-600">{label}</span>
                        </div>
                      ))}
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
