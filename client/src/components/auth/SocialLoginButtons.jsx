import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLoginButtons() {
  const socialButtons = [
    {
      name: "Google",
      icon: <FcGoogle size={20} />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} className="text-[#0A66C2]" />,
    },
  ];

  return (
    <div className="space-y-3">
      {socialButtons.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
        >
          {provider.icon}
          Continue with {provider.name}
        </button>
      ))}
    </div>
  );
}
