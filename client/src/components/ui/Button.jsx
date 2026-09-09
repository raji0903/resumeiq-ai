export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",

    secondary:
      "bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500",

    outline:
      "border border-slate-600 text-slate-300 hover:bg-slate-800",

    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-2.5 text-base",

    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${loading ? "opacity-60 cursor-not-allowed" : ""}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}