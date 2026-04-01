export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-main">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-animated opacity-30"></div>
    </div>
  );
}
