"use client";

export function NavbarContainer({ children }: { children: React.ReactNode }) {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-[rgb(11,12,13)] shadow-sm z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 p-4 items-center">
        {children}
      </div>
    </nav>
  );
}
