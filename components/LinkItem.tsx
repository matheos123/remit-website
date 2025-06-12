import React from "react";
import Link from "next/link";
import { LinkItemProps } from "@/types";
function LinkItem({
  href,
  label,
  icon,
  external = false,
}: LinkItemProps) {
  return (
    <Link
      className="text-black text-sm font-bold dark:text-white hover:text-gray-300 transition-colors"
      href={href}
    >
      {label}
    </Link>
  );
}

export default LinkItem;
