import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RoleSelection = ({ setRole }) => {
  const navigate = useNavigate();

  const handleSelect = (role: string) => {
    localStorage.setItem("userRole", role);
    setRole(role);

    if (role === "admin") navigate("/admin", { replace: true });
    else if (role === "reviewer") navigate("/reviewer", { replace: true });
    else navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold mb-6">Select Your Role</h1>
      <div className="flex gap-4">
        <Button onClick={() => handleSelect("admin")}>Admin</Button>
        <Button onClick={() => handleSelect("reviewer")}>Reviewer</Button>
        <Button onClick={() => handleSelect("client")}>Client</Button>
      </div>
    </div>
  );
};

export default RoleSelection;
