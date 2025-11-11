"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
  const [step, setStep] = useState<"choice" | "buyer" | "seller">("choice")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push("/auth/login")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center px-4">
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
          {step === "choice" && (
            <>
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
                Join ASTU Gebeya
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                Choose how you want to use the platform
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => setStep("buyer")}
                  className="w-full p-6 border-2 border-primary rounded-lg hover:bg-primary/5 transition group"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition">🛍️</div>
                    <h3 className="font-bold text-lg text-primary">I&apos;m a Buyer</h3>
                    <p className="text-sm text-muted-foreground mt-2">Browse and purchase items on campus</p>
                  </div>
                </button>

                <button
                  onClick={() => setStep("seller")}
                  className="w-full p-6 border-2 border-accent rounded-lg hover:bg-accent/5 transition group"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition">📦</div>
                    <h3 className="font-bold text-lg text-accent-foreground">I&apos;m a Seller</h3>
                    <p className="text-sm text-muted-foreground mt-2">List and sell your items</p>
                  </div>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground text-sm">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-primary hover:text-primary/80 font-semibold">
                    Sign in here
                  </Link>
                </p>
              </div>
            </>
          )}

          {(step === "buyer" || step === "seller") && (
            <>
              <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
                {step === "buyer" ? "Sign up as Buyer" : "Become a Seller"}
              </h2>
              <p className="text-muted-foreground mb-6 text-center">Create your account in minutes</p>

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="bg-input border-border focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-input border-border focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+251 9XX XXX XXXX"
                    className="bg-input border-border focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="bg-input border-border pr-10 focus:ring-2 focus:ring-primary/40 transition-all duration-200"
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

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 text-lg transition-all duration-200"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>

                <button
                  type="button"
                  onClick={() => setStep("choice")}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Back to choice
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground text-sm">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-primary hover:text-primary/80 font-semibold">
                    Sign in here
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing up, you agree to our Terms & Conditions and Privacy Policy
        </p>
      </div>
    </div>
  )
}
