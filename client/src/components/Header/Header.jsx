import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-40
          bg-white
          border-b
        "
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600"></div>
            <span className="font-bold text-xl">apna</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-96">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search jobs"
              className="ml-2 w-full outline-none"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="hover:text-blue-600">Jobs</a>
            <a href="#" className="hover:text-blue-600">Companies</a>
            <a href="#" className="hover:text-blue-600">Career Guide</a>
          </div>

          {/* Login/Register Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="
                px-4 py-2
                border
                rounded-lg
                font-medium
              "
            >
              Login
            </button>
            <button
              className="
                px-4 py-2
                bg-blue-600
                text-white
                rounded-lg
                font-medium
              "
            >
              Register
            </button>
          </div>

          {/* Mobile Header - Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setOpen(true)}>
              <Menu size={24} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="
            bg-white
            h-full
            w-72
            p-5
          ">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xl">apna</span>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="flex flex-col gap-5 mt-8">
              <a href="#" className="hover:text-blue-600">Jobs</a>
              <a href="#" className="hover:text-blue-600">Companies</a>
              <a href="#" className="hover:text-blue-600">Career Guide</a>
              <a href="#" className="hover:text-blue-600">Login</a>
              <a href="#" className="hover:text-blue-600">Register</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
