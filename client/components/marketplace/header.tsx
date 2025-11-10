"use client"

import { ShoppingBag, Search, MessageSquare, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HeaderProps {
  onSellClick: () => void
}

export default function Header({ onSellClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">ASTU</h1>
              <p className="text-xs text-muted-foreground">Gebeya</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" className="text-foreground hover:bg-accent/10">
              Home
            </Button>
            <Button variant="ghost" className="text-foreground hover:bg-accent/10">
              Categories
            </Button>
            <Button variant="ghost" className="text-foreground hover:bg-accent/10">
              Browse
            </Button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex gap-2 bg-transparent">
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <MessageSquare className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button
              onClick={onSellClick}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hidden sm:inline-flex"
            >
              SELL
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Categories
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Browse
            </Button>
            <Button onClick={onSellClick} className="w-full bg-accent text-accent-foreground mt-2">
              SELL
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
