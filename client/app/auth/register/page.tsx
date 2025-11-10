"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ShoppingBag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  const [step, setStep] = useState<"choice" | "buyer" | "seller">("choice")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate registration
    setTimeout(() => {
      router.push("/")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Marketplace</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-primary p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">ASTU</h1>
              <p className="text-xs text-muted-foreground">Gebeya</p>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-card rounded-2xl border border-border shadow-lg p-8 animate-fade-in-up">
            {step === "choice" && (
              <>
                <h2 className="text-3xl font-bold text-foreground mb-2">Join ASTU Gebeya</h2>
                <p className="text-muted-foreground mb-8">Choose how you want to use the platform</p>

                <div className="space-y-4">
                  <button
                    onClick={() => setStep("buyer")}
                    className="w-full p-6 border-2 border-primary rounded-lg hover:bg-primary/5 transition group"
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-3 group-hover:scale-110 transition">🛍️</div>
                      <h3 className="font-bold text-lg text-primary">I'm a Buyer</h3>
                      <p className="text-sm text-muted-foreground mt-2">Browse and purchase items on campus</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setStep("seller")}
                    className="w-full p-6 border-2 border-accent rounded-lg hover:bg-accent/5 transition group"
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-3 group-hover:scale-110 transition">📦</div>
                      <h3 className="font-bold text-lg text-accent-foreground">I'm a Seller</h3>
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
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {step === "buyer" ? "Sign up as Buyer" : "Become a Seller"}
                </h2>
                <p className="text-muted-foreground mb-6">Create your account in minutes</p>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-input border-border"
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
                      className="bg-input border-border"
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
                      className="bg-input border-border"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <Input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="bg-input border-border"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 text-base"
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
          <p className="text-center text-xs text-muted-foreground mt-8">
            By signing up, you agree to our Terms & Conditions and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
