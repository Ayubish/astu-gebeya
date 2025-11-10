"use client"

import type React from "react"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeroSectionProps {
  onSearch: (query: string) => void
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSearch(formData.get("search") as string)
  }

  return (
    <section className="bg-gradient-to-r from-primary via-primary to-primary/80 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">What are you looking for?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Find books, electronics, furniture, and more from your campus community
          </p>

          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
            <select className="px-4 py-3 rounded-lg border border-accent/30 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent md:w-48">
              <option>All Categories</option>
              <option>Books & Notes</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Fashion</option>
              <option>Services</option>
            </select>
            <div className="flex-1 relative">
              <Input
                name="search"
                placeholder="I am looking for..."
                className="w-full px-4 py-3 bg-white border-accent/30 text-foreground placeholder:text-muted-foreground pr-12"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-muted-foreground hover:text-foreground transition" />
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-primary-foreground/70">Trending:</span>
            {["Laptops", "Books", "Notes", "Phones"].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
