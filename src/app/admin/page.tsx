export default function AdminHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-neutral-900">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard label="Total Bookings" value="128" trend="↑ 12%" />
        <StatCard label="Revenue" value="$3,240" trend="↑ 5%" />
        <StatCard label="New Reviews" value="18" trend="↓ 2%" />
      </div>
      <OrdersTable />
    </div>
  );
}

function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-neutral-500">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-2xl font-semibold text-neutral-900">{value}</p>
        <span className="text-xs text-emerald-600">{trend}</span>
      </div>
    </div>
  );
}

function OrdersTable() {
  const rows = [
    { id: "#8233", name: "John McCormick", service: "Knotless Braids", date: "Aug 20", price: "$120", status: "Dispatched" },
    { id: "#8232", name: "Sandra Pugh", service: "Silk Press", date: "Aug 19", price: "$70", status: "Pending" },
    { id: "#8231", name: "Vernie Hart", service: "Weave Install", date: "Aug 18", price: "$230", status: "Completed" },
    { id: "#8230", name: "Mark Clark", service: "Cornrows", date: "Aug 18", price: "$90", status: "Pending" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
        <div className="flex gap-6 text-sm">
          <button className="rounded-full bg-neutral-900 px-3 py-1.5 text-white">All bookings</button>
          <button className="rounded-full px-3 py-1.5 text-neutral-600 hover:bg-neutral-100">Upcoming</button>
          <button className="rounded-full px-3 py-1.5 text-neutral-600 hover:bg-neutral-100">Pending</button>
          <button className="rounded-full px-3 py-1.5 text-neutral-600 hover:bg-neutral-100">Completed</button>
        </div>
        <input className="h-9 w-48 rounded-md border border-neutral-300 px-3 text-sm focus:outline-none" placeholder="Search" />
      </div>
      <table className="w-full text-left text-sm">
        <thead className="bg-neutral-50 text-neutral-500">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Service</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id} className={i === 1 ? "bg-indigo-600/90 text-white" : "hover:bg-neutral-50"}>
              <td className="px-4 py-3 font-medium">{r.id}</td>
              <td className="px-4 py-3">{r.name}</td>
              <td className="px-4 py-3">{r.service}</td>
              <td className="px-4 py-3">{r.date}</td>
              <td className="px-4 py-3">{r.price}</td>
              <td className="px-4 py-3">
                <span className={
                  [
                    "rounded-full px-2.5 py-1 text-xs",
                    r.status === "Completed" && "bg-emerald-100 text-emerald-700",
                    r.status === "Pending" && "bg-amber-100 text-amber-700",
                    r.status === "Dispatched" && "bg-indigo-100 text-indigo-700",
                  ].filter(Boolean).join(" ")
                }>
                  {r.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <button className="rounded-md bg-neutral-900 px-3 py-1.5 text-white">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-3 text-xs text-neutral-500">
        <span>Showing 1–4 of 28</span>
        <div className="flex gap-1">
          {[1,2,3,4,5].map((p)=> (
            <button key={p} className="h-7 w-7 rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-100">{p}</button>
          ))}
        </div>
      </div>
    </div>
  );
}