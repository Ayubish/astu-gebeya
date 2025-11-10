"use client";

import { useState } from "react";
import Header from "@/components/marketplace/header";
import HeroSection from "@/components/marketplace/hero-section";
import RegisterFlow from "@/components/auth/register-flow";
import ListingsGrid from "@/components/marketplace/listings-grid";
import CategoriesSidebar from "@/components/marketplace/categories-sidebar";
import Footer from "@/components/marketplace/footer";

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header onSellClick={() => setShowRegister(true)} />

      {showRegister ? (
        <RegisterFlow onClose={() => setShowRegister(false)} />
      ) : (
        <>
          <HeroSection onSearch={setSearchQuery} />
          <div className="flex">
            <CategoriesSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <div className="flex-1">
              <ListingsGrid
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
