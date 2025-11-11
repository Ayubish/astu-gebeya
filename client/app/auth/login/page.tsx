"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login
    setTimeout(() => {
      router.push("/")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center px-2">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center gap-0 mb-6">
          <div className="relative w-32 h-32">
            <Image
              src="/images/gebeyalogo.png"
              alt="ASTU Gebeya Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-extrabold text-primary drop-shadow-md -mt-10">
            ASTU Gebeya
          </h1>
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-3xl border border-border shadow-xl p-8 sm:p-10 animate-fade-in-up transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
            Welcome Back
          </h2>
          <p className="text-muted-foreground mb-6 text-center">
            Sign in to your ASTU Gebeya account
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-input border-border focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-input border-border focus:ring-2 focus:ring-primary/40 pr-10 transition-all duration-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-9 right-3 text-muted-foreground hover:text-foreground transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-foreground">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 text-lg transition-all duration-200"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
              >
                Create one now
              </Link>
            </p>
          </div>
         
        </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
          By signing up, you agree to our Terms & Conditions and Privacy Policy
        </p>
      </div>
    </div>
  )
}
