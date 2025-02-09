"use client";

import Link from "next/link";
import { Mail } from "../modules/mail/mail.types";
import { formatTimestamp } from "../utils/format-timestamp";

export function EvItem({ mail }: { mail: Mail }) {
  return (
    <Link
      href={`/mail/${mail.id}`}
      className="flex justify-between items-start hover:bg-gray-200 hover:dark:bg-[rgb(13,14,15)] p-4 rounded-xl transition"
    >
      <div>
        <h5 className="text-xl"> {mail.title}</h5>
        <p className="text-gray-500">{mail.description}</p>
      </div>

      <p className="text-gray-500 text-sm">{formatTimestamp(mail.createdAt)}</p>
    </Link>
  );
}
