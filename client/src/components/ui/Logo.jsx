import { FiFileText } from "react-icons/fi";

export default function Logo({ showTagline = false }) {
  return (
    <div className="relative z-10 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
        <FiFileText className="text-xl text-white" />
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-tight text-white">
          Resume<span className="text-blue-500">IQ</span>
        </h1>

        {showTagline && (
          <p className="text-xs text-zinc-500">
            AI Career Intelligence
          </p>
        )}
      </div>
    </div>
  );
}