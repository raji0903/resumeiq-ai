import { Link } from "react-router-dom";
import { FiArrowLeft, FiMail } from "react-icons/fi";
import AuthLayout from "../../layouts/AuthLayout";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <div>
        <Link
          to="/login"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
        >
          <FiArrowLeft />
          Back to login
        </Link>

        <h2 className="text-3xl font-bold text-white">
          Reset your password
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Enter your email address and we'll send you instructions to reset your password.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Email address
            </label>

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            Send reset instructions
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}