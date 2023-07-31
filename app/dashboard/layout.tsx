import CreateBoard from "@/components/dashboard/CreateBoard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="flex justify-between">
        <h1 className="text-lg font-medium">All Boards</h1>
        <CreateBoard />
      </div>
      <div className="mt-8 grid grid-cols-[1fr] gap-4 min-[500px]:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)]">
        {children}
      </div>
    </div>
  );
}
