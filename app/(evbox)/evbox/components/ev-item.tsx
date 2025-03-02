"use client";

import Link from "next/link";
import { Mail } from "../modules/mail/mail.types";
import { formatTimestamp } from "../utils/format-timestamp";

export function EvItem({ mail }: { mail: Mail }) {
  return (
    <Link
      href={`/evbox/${mail.id}`}
      className="flex justify-between items-start flex-col-reverse hover:bg-gray-200 hover:dark:bg-[rgb(13,14,15)] p-4 rounded-xl transition"
    >
      <div className="w-full flex-1">
        <h5 className="text-xl line-clamp-1"> {mail.title}</h5>
        <p className="text-gray-600 dark:text-gray-400">{mail.description}</p>
      </div>

      <p className="text-gray-500 text-sm mb-2">
        {formatTimestamp(mail.createdAt)}
      </p>
    </Link>
  );
}
