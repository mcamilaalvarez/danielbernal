export default function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-end ">
        {children}
    </div>
  );
}