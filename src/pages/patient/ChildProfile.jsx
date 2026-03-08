import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Baby, Plus } from "lucide-react";

const ChildProfile = () => {
  const [children, setChildren] = useState([]);

  return (
    <DashboardLayout role="patient">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Child Profile</h1>
          <p className="text-muted-foreground text-sm">Track your little one's growth</p>
        </div>
        <button className="btn-primary flex items-center gap-2 text-sm py-3 px-5">
          <Plus className="w-4 h-4" /> Add Child
        </button>
      </div>

      {children.length === 0 && (
        <div className="bg-card rounded-2xl shadow-soft p-16 text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Baby className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">No children added yet</h3>
          <p className="text-muted-foreground text-sm mb-6">Add your child's profile to start tracking</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-all">
            <Plus className="w-4 h-4" /> Add Child
          </button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ChildProfile;
