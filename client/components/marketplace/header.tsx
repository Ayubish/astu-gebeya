"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSellClick?: () => void;
}

export default function Header({ onSellClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const getActiveNav = () => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/categories")) return "Categories";
    if (pathname === "/browse") return "Browse";
    return "Home";
  };

  const navItems = ["Home", "Categories", "Browse"];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md shadow-sm transition">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group ml-2">
          <div className="relative w-20 h-20 sm:w-12 sm:h-12 flex items-center justify-center overflow-hidden mt-2">
            <Image
              src="/images/gebeyalogo.png"
              alt="ASTU Gebeya Logo"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight -ml-3">
            ASTU <span className="text-foreground">Gebeya</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : item === "Categories"
                  ? "/categories"
                  : "/browse"
              }>
              <Button
                variant="ghost"
                className={`text-foreground hover:bg-accent/10 transition ${
                  getActiveNav() === item
                    ? "underline underline-offset-4 font-semibold text-primary"
                    : ""
                }`}>
                {item}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Login / Register */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="text-foreground hover:bg-accent/10 font-medium">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Register
              </Button>
            </Link>
          </div>

          {/* Sell Button */}
          <Button
            onClick={() =>
              onSellClick ? onSellClick() : router.push("/auth/register")
            }
            className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-lg">
            <Plus className="w-5 h-5 mr-1" />
            Sell
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}></div>

          {/* Slide-in Menu */}
          <div className="relative bg-card w-64 p-4 flex flex-col space-y-3 z-50 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Categories"
                    ? "/categories"
                    : "/browse"
                }>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left ${
                    getActiveNav() === item
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}>
                  {item}
                </Button>
              </Link>
            ))}

            {/* Auth Links */}
            <Link href="/auth/login">
              <Button
                variant="outline"
                className="w-full justify-start text-left border-accent/30 bg-transparent"
                onClick={() => setMobileMenuOpen(false)}>
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button
                className="w-full bg-primary text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}>
                Register
              </Button>
            </Link>

            {/* Sell Button */}
            <Button
              onClick={() => {
                if (onSellClick) onSellClick();
                else router.push("/auth/register");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-accent text-accent-foreground mt-2">
              <Plus className="w-5 h-5 mr-1" /> Sell
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
