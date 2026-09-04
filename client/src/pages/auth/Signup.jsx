import { Link } from "react-router-dom";
import { FiArrowRight, FiLock, FiMail, FiUser } from "react-icons/fi";

import AuthLayout from "../../layouts/AuthLayout";
import SocialLoginButtons from "../../components/auth/SocialLoginButtons";
import AuthDivider from "../../components/auth/AuthDivider";

export default function Signup() {
  return (
    <AuthLayout>
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Create your account
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Start building a smarter career journey today.
          </p>
        </div>

        <SocialLoginButtons />
        <AuthDivider />

        <form className="space-y-4">
          <AuthInput label="Full name" icon={<FiUser />} placeholder="Your name" />
          <AuthInput label="Email address" icon={<FiMail />} placeholder="you@example.com" type="email" />
          <AuthInput label="Password" icon={<FiLock />} placeholder="Create a password" type="password" />

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            Create account
            <FiArrowRight />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

function AuthInput({ label, icon, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
          {icon}
        </span>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
    </div>
  );
}