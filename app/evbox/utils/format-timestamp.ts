"use client";

import { format } from "date-fns";

export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  return format(date, "MMM do yyyy h:mma");
};
