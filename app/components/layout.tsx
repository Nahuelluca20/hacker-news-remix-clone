export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {children}
    </main>
  );
}
