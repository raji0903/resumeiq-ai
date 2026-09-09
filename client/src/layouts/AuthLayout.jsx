import { motion } from "framer-motion";
import Logo from "../components/ui/Logo";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Branding Section */}
        <section className="relative hidden overflow-hidden border-r border-zinc-800 lg:flex lg:flex-col lg:justify-between p-10 xl:p-16">
          
          <Logo showTagline />

          <div className="max-w-xl">
            <p className="mb-6 text-sm font-medium text-blue-400">
              AI-POWERED CAREER INTELLIGENCE
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight xl:text-6xl">
              Build a stronger resume.
              <span className="block text-zinc-500">
                Land better opportunities.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400">
              Analyze your resume, identify skill gaps, and track every job
              application from one intelligent workspace.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            AI-powered career intelligence platform
          </div>

          {/* Decorative glow */}
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        </section>

        {/* Right Auth Section */}
        <main className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Mobile Logo */}
            <div className="mb-10 lg:hidden">
              <Logo showTagline />
            </div>

            {children}
          </motion.div>
        </main>

      </div>
    </div>
  );
}