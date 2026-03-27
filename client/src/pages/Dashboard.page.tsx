import Navbar from "../components/layout/navbar.component";

const DashboardPage = () => {
  const userRaw = localStorage.getItem("user");
  const user = userRaw ? (JSON.parse(userRaw) as { email?: string }) : null;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar title="Dashboard" />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Welcome{user?.email ? `, ${user.email}` : ""}
          </h2>
          <p className="mt-2 text-slate-600">
            You are logged in and can now access protected content.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
