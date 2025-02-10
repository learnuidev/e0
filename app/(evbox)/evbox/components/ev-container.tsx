import { cn } from "@/lib/utils";

export const EvContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={cn(
        "mt-36 p-4 sm:p-8 dark:bg-[rgb(17,18,19)] bg-gray-100 rounded-2xl max-w-5xl mx-auto",
        className
      )}
    >
      {children}
    </main>
  );
};
