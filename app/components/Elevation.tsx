import type { Variant } from "../data/projects";

const range = (from: number, to: number, step: number) => {
  const out: number[] = [];
  for (let v = from; v <= to; v += step) out.push(v);
  return out;
};

function shapes(variant: Variant): string[] {
  const ground = "M10 460H390";
  switch (variant) {
    case "tower":
      return [
        ground,
        "M130 460V80H270V460",
        "M130 80L152 48H248L270 80",
        "M200 48V14",
        ...range(100, 440, 20).map((y) => `M130 ${y}H270`),
        ...range(150, 250, 20).map((x) => `M${x} 80V460`),
        "M270 460V300H345V460",
        ...range(320, 440, 20).map((y) => `M270 ${y}H345`),
        "M70 460V380H130",
        ...range(400, 440, 20).map((y) => `M70 ${y}H130`),
      ];
    case "terrace":
      return [
        ground,
        "M50 460V390H125V330H200V270H275V210H350V460",
        ...range(410, 440, 30).map((y) => `M50 ${y}H350`),
        ...range(350, 440, 30).map((y) => `M125 ${y}H350`),
        ...range(290, 440, 30).map((y) => `M200 ${y}H350`),
        ...range(230, 440, 30).map((y) => `M275 ${y}H350`),
        "M50 390H125M125 330H200M200 270H275M275 210H350",
        "M44 386H131M119 326H206M194 266H281M269 206H356",
        ...range(70, 330, 50).map((x) => `M${x} 390V460`),
      ];
    case "pavilion":
      return [
        ground,
        "M40 460V345H360V460",
        "M18 345H382M18 333H382",
        ...range(60, 340, 40).map((x) => `M${x} 345V460`),
        "M100 333V270H300V333",
        "M88 270H312",
        ...range(130, 270, 35).map((x) => `M${x} 270V333`),
        "M40 400H360",
        "M200 345V460",
      ];
    case "court":
      return [
        ground,
        "M40 460V210H165V460",
        "M235 460V150H360V460",
        ...range(230, 440, 22).map((y) => `M40 ${y}H165`),
        ...range(170, 440, 22).map((y) => `M235 ${y}H360`),
        ...[70, 100, 135].map((x) => `M${x} 210V460`),
        ...[265, 297, 330].map((x) => `M${x} 150V460`),
        "M165 460V410A35 35 0 0 1 235 410V460",
        "M165 210H235V230",
      ];
  }
}

export default function Elevation({
  variant,
  className = "",
  animate = true,
}: {
  variant: Variant;
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 400 480"
      className={`elevation ${animate ? "elevation--draw" : ""} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {shapes(variant).map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          style={{ animationDelay: `${(i % 24) * 0.045}s` }}
        />
      ))}
    </svg>
  );
}
