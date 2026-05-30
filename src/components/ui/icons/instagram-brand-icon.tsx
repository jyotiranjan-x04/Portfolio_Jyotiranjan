import { useId } from "react";

type InstagramBrandIconProps = {
  className?: string;
};

export function InstagramBrandIcon({ className }: InstagramBrandIconProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9CE34" />
          <stop offset="0.35" stopColor="#EE2A7B" />
          <stop offset="0.7" stopColor="#6228D7" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>

      <rect x="3" y="3" width="18" height="18" rx="5" stroke={`url(#${gradientId})`} strokeWidth="2" />
      <circle cx="12" cy="12" r="4.25" stroke={`url(#${gradientId})`} strokeWidth="2" />
      <circle cx="17.25" cy="6.75" r="1.15" fill={`url(#${gradientId})`} />
    </svg>
  );
}
