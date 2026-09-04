import AuthLayout from "../../layouts/AuthLayout";
import Button from "../../components/ui/Button";

export default function Login() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-slate-400">
            Sign in to continue to ResumeIQ
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Forgot Password?
            </button>
          </div>

          <Button>
            Sign In
          </Button>

        </form>

        <p className="mt-8 text-center text-slate-400">
          Don't have an account?

          <span className="ml-2 cursor-pointer text-indigo-400 hover:text-indigo-300">
            Sign Up
          </span>
        </p>

      </div>
    </AuthLayout>
  );
}