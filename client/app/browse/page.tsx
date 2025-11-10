"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Star, Heart, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/marketplace/header"
import Footer from "@/components/marketplace/footer"
import { CATEGORIES, MOCK_PRODUCTS } from "@/lib/constants"

export default function BrowsePage() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [priceRange, setPriceRange] = useState([0, 2000000])

  const filteredProducts = MOCK_PRODUCTS.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || p.category.toString() === selectedCategory
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onSellClick={() => {}} />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white mb-4 w-fit">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-4xl font-bold mb-2">Browse All Items</h1>
          <p className="text-white/90">Search and filter across all categories</p>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar - Filters */}
        <aside className="hidden lg:block w-72 bg-card border-r border-border p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
          <h2 className="text-lg font-bold text-foreground mb-6">Filters</h2>

          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">Search</label>
            <Input
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-input border-border"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Categories
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                  selectedCategory === null ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
                }`}
              >
                All Categories
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id.toString())}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition text-sm ${
                    selectedCategory === cat.id.toString()
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
            <div className="space-y-2">
              <label className="block text-sm text-muted-foreground">Min: ETB {priceRange[0].toLocaleString()}</label>
              <input
                type="range"
                min="0"
                max="2000000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <label className="block text-sm text-muted-foreground mt-3">
                Max: ETB {priceRange[1].toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="2000000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>

          {/* Sort */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-input text-foreground text-sm"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-8 py-12 overflow-y-auto max-h-[calc(100vh-200px)]">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <Button variant="outline" className="w-full bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Show Filters
            </Button>
          </div>

          {/* Results Info */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  {selectedCategory ? CATEGORIES.find((c) => c.id.toString() === selectedCategory)?.name : "All Items"}
                </h2>
                <p className="text-muted-foreground">{sortedProducts.length} items found</p>
              </div>

              {/* Desktop Sort */}
              <div className="hidden md:block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-border bg-input text-foreground text-sm"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-muted h-56">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded">
                        {product.condition}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 hover:bg-white transition"
                    >
                      <Heart
                        className={`w-4 h-4 transition ${
                          favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <p className="text-xl font-bold text-primary">ETB {product.price.toLocaleString()}</p>

                    <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-2 mt-1">{product.title}</h3>

                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>

                    <div className="border-t border-border pt-2 mb-2">
                      <span className="text-xs font-medium text-foreground">{product.seller}</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        {product.location}
                      </div>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm py-2">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">No items match your search</p>
              <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters</p>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  )
}
