import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar w-full bg-base-300">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        <Menu className="size-5" />
      </label>
      <div className="px-4">Navbar Title</div>
    </nav>
  );
}
