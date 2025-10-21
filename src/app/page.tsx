import { FlowHeader } from "@/components/flow-header";
import { FlowContent } from "@/components/flow-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{ zIndex: 0 }}
      >
        <div
          className="absolute rounded-full"
          style={{
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            border: "12px solid #00ef8b",
            opacity: 0.5,
          }}
        ></div>

        <div
          className="absolute rounded-full"
          style={{
            bottom: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            border: "12px solid #a855f7",
            opacity: 0.5,
          }}
        ></div>

        <div
          className="absolute rounded-full"
          style={{
            top: "120px",
            left: "80px",
            width: "180px",
            height: "180px",
            border: "8px solid #22d3ee",
            opacity: 0.5,
          }}
        ></div>

        <div
          className="absolute rounded-full"
          style={{
            bottom: "100px",
            right: "100px",
            width: "250px",
            height: "250px",
            border: "10px solid #f59e0b",
            opacity: 0.5,
          }}
        ></div>

        <div
          className="absolute rounded-full"
          style={{
            top: "50%",
            right: "-60px",
            width: "320px",
            height: "320px",
            border: "10px solid #ec4899",
            opacity: 0.5,
            transform: "translateY(-50%)",
          }}
        ></div>

        <div
          className="absolute rounded-full"
          style={{
            top: "25%",
            left: "-50px",
            width: "240px",
            height: "240px",
            border: "8px solid #3b82f6",
            opacity: 0.5,
          }}
        ></div>
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <FlowHeader />
      </div>

      <FlowContent />
    </div>
  );
}
