"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RegisterFlowProps {
  onClose: () => void
}

export default function RegisterFlow({ onClose }: RegisterFlowProps) {
  const [step, setStep] = useState<"choice" | "buyer" | "seller">("choice")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Register as", step, formData)
    // Handle registration logic
  }

  if (step === "choice") {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-card rounded-2xl p-8 max-w-md w-full animate-fade-in-up">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">Join ASTU Gebeya</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-foreground/70 mb-8 text-center">Are you a buyer or seller?</p>

          <div className="space-y-4">
            <button
              onClick={() => setStep("buyer")}
              className="w-full p-6 border-2 border-primary rounded-lg hover:bg-primary/5 transition group"
            >
              <div className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition">🛍️</div>
                <h3 className="font-bold text-lg text-primary">I&apos;m a Buyer</h3>
                <p className="text-sm text-muted-foreground mt-2">Browse and purchase items on campus</p>
              </div>
            </button>

            <button
              onClick={() => setStep("seller")}
              className="w-full p-6 border-2 border-accent rounded-lg hover:bg-accent/5 transition group"
            >
              <div className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition">📦</div>
                <h3 className="font-bold text-lg text-accent-foreground">I&apos;m a Seller</h3>
                <p className="text-sm text-muted-foreground mt-2">List and sell your items</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-2xl p-8 max-w-md w-full animate-fade-in-up">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary">
            {step === "buyer" ? "Sign up as Buyer" : "Become a Seller"}
          </h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="bg-input border-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="bg-input border-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+251 9XX XXX XXXX"
              className="bg-input border-border"
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
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6"
          >
            Create Account
          </Button>

          <button
            type="button"
            onClick={() => setStep("choice")}
            className="w-full text-sm text-muted-foreground hover:text-foreground"
          >
            Back to choice
          </button>
        </form>
      </div>
    </div>
  )
}
