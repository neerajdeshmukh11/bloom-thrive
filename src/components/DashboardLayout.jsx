import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children, role = "patient" }) => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar role={role} />
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
