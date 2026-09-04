import { Link } from "react-router-dom";
import { FiArrowRight, FiLock, FiMail } from "react-icons/fi";

import AuthLayout from "../../layouts/AuthLayout";
import SocialLoginButtons from "../../components/auth/SocialLoginButtons";
import AuthDivider from "../../components/auth/AuthDivider";

export default function Login() {
  return (
    <AuthLayout>
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Welcome back
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Sign in to continue managing your career journey.
          </p>
        </div>

        <SocialLoginButtons />

        <AuthDivider />

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Email address
            </label>

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-300">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 accent-blue-600"
            />

            <label htmlFor="remember" className="text-sm text-zinc-400">
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            Sign in
            <FiArrowRight />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}