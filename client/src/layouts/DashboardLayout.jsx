import Navbar from "../components/layout/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <main className="p-6">
        {children}
      </main>

    </div>
  );
}