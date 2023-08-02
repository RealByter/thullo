export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col px-6 gap-6">
      {children}
    </div>
  );
}
