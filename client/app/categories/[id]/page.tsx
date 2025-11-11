"use client";

import { useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Star, Heart, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/marketplace/header";
import Footer from "@/components/marketplace/footer";
import { CATEGORIES, MOCK_PRODUCTS } from "@/lib/constants";

interface CategoryDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CategoryDetailsPage({
  params,
}: CategoryDetailsPageProps) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [searchInCategory, setSearchInCategory] = useState("");

  // `params` may be a Promise in client components. Unwrap with React.use()
  const resolvedParams = use(params as unknown as Promise<{ id: string }>);

  const category = CATEGORIES.find(
    (c) => c.id.toString() === resolvedParams.id
  );
  const categoryProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === Number.parseInt(resolvedParams.id)
  );

  const filteredProducts = categoryProducts.filter((p) =>
    p.title.toLowerCase().includes(searchInCategory.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-primary flex flex-col">
        <Header onSellClick={() => {}} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-lg">Category not found</p>
            <Link
              href="/categories"
              className="text-primary hover:text-primary/80 mt-4 inline-block">
              Browse all categories
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onSellClick={() => {}} />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/categories"
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 w-fit">
            <ArrowLeft className="w-5 h-5" />
            Back to Categories
          </Link>

          <div className="flex items-center gap-4">
            <div className="text-5xl">{category.icon}</div>
            <div>
              <h1 className="text-3xl font-bold">{category.name}</h1>
              <p className="text-white/90">
                {filteredProducts.length} items available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-card border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <Input
              placeholder="Search in this category..."
              value={searchInCategory}
              onChange={(e) => setSearchInCategory(e.target.value)}
              className="bg-input border-border flex-1"
            />

            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-input text-foreground text-sm">
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rating</option>
              </select>

              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12 flex-1">
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  {/* Image Container */}
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
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(product.id);
                      }}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 hover:bg-white transition">
                      <Heart
                        className={`w-4 h-4 transition ${
                          favorites.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <p className="text-xl font-bold text-primary">
                      ETB {product.price.toLocaleString()}
                    </p>

                    <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-2 mt-1">
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-accent text-accent"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>

                    <div className="border-t border-border pt-2 mb-2">
                      <span className="text-xs font-medium text-foreground">
                        {product.seller}
                      </span>
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
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">
              No items found in this category
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Try adjusting your search
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
