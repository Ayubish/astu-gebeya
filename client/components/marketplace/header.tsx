"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onSellClick: () => void
}

export default function Header({ onSellClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("Home")

  const navItems = ["Home", "Categories", "Browse"]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <ShoppingBag className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">ASTU</h1>
            <p className="text-xs text-muted-foreground">Gebeya • Campus Marketplace</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link key={item} href={item === "Home" ? "/" : item === "Categories" ? "/categories" : "/browse"} passHref>
              <Button
                variant="ghost"
                className={`text-foreground hover:bg-accent/10 ${
                  activeNav === item ? "underline underline-offset-4 font-semibold" : ""
                }`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/dashboard/profile" passHref>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </Link>

          <Button
            onClick={onSellClick}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hidden sm:inline-flex"
          >
            SELL
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)}></div>

          {/* Slide-in Menu */}
          <div className="relative bg-card w-64 p-4 flex flex-col space-y-3 z-50">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : item === "Categories" ? "/categories" : "/browse"}
                passHref
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveNav(item)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
            <Button onClick={onSellClick} className="w-full bg-accent text-accent-foreground mt-2">
              SELL
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
