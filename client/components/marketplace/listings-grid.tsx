"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_PRODUCTS } from "@/lib/constants";

interface ListingsGridProps {
  searchQuery?: string;
  selectedCategory?: string;
}

export default function ListingsGrid({
  searchQuery,
  selectedCategory,
}: ListingsGridProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredListings = MOCK_PRODUCTS.filter((item) => {
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toString().includes(searchQuery);

    const matchesCategory =
      !selectedCategory || item.category.toString() === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-8 bg-background flex-1">
      <div className="px-4 md:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          {searchQuery ? `Results for "${searchQuery}"` : "Trending Listings"}
        </h2>
        <p className="text-muted-foreground mb-8">
          {filteredListings.length} items available
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredListings.map((listing, index) => (
            <Link key={listing.id} href={`/products/${listing.id}`}>
              <div
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up cursor-pointer h-full"
                style={{ animationDelay: `${index * 30}ms` }}>
                {/* Image Container */}
                <div className="relative overflow-hidden bg-muted h-56">
                  <img
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Condition Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded">
                      {listing.condition}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(listing.id);
                    }}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 hover:bg-white transition">
                    <Heart
                      className={`w-4 h-4 transition ${
                        favorites.includes(listing.id)
                          ? "fill-red-500 text-red-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-3">
                  <div className="mb-2">
                    <p className="text-xl font-bold text-primary">
                      ETB {listing.price.toLocaleString()}
                    </p>
                  </div>

                  <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-2">
                    {listing.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(listing.rating)
                              ? "fill-accent text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {listing.rating}
                    </span>
                  </div>

                  {/* Seller & Location */}
                  <div className="border-t border-border pt-2 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-foreground">
                        {listing.seller}
                      </span>
                      {listing.verified && (
                        <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {listing.location}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm py-2">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No listings found. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
