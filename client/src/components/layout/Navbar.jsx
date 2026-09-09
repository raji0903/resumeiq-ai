import { FiBell, FiSearch, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6">

      {/* Left Section */}
      <div>
        <h1 className="text-xl font-bold text-white">
          ResumeIQ
        </h1>
      </div>

      {/* Center Section */}
      <div className="hidden md:flex items-center bg-slate-800 rounded-lg px-3 py-2 w-80">
        <FiSearch className="text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="ml-2 w-full bg-transparent outline-none text-white placeholder:text-slate-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        <button>
          <FiBell
            className="text-slate-300 hover:text-white"
            size={20}
          />
        </button>

        <button>
          <FiUser
            className="text-slate-300 hover:text-white"
            size={20}
          />
        </button>

      </div>

    </header>
  );
}