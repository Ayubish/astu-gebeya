"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Star, Heart, Share2, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/marketplace/header"
import Footer from "@/components/marketplace/footer"
import { MOCK_PRODUCTS } from "@/lib/constants"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const product = MOCK_PRODUCTS.find((p) => p.id.toString() === params.id)

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header onSellClick={() => {}} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-4">Product not found</p>
            <Link href="/" className="text-primary hover:text-primary/80 inline-block">
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onSellClick={() => {}} />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/80">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-white/80 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full bg-muted rounded-lg overflow-hidden h-96 md:h-[500px]">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  {product.condition}
                </span>
              </div>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 hover:bg-white transition"
              >
                <Heart
                  className={`w-6 h-6 transition ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
                />
              </button>
            </div>

            {/* Image Gallery Placeholder */}
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-muted rounded-lg cursor-pointer hover:ring-2 hover:ring-primary transition"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt="Thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            {/* Title & Price */}
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.title}</h1>
              <p className="text-2xl font-bold text-primary mb-4">ETB {product.price.toLocaleString()}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{product.rating}</span>
                <span className="text-muted-foreground">(128 reviews)</span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">Seller Information</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">{product.seller}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">Verified</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  {product.location}
                </div>
                <p className="text-sm text-muted-foreground">Seller since January 2023 • 98% positive rating</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">Product Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Condition</span>
                  <span className="font-medium text-foreground">{product.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium text-foreground capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Posted</span>
                  <span className="font-medium text-foreground">2 days ago</span>
                </div>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex gap-3">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-foreground hover:bg-muted transition"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-l border-r border-border bg-transparent text-foreground"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-foreground hover:bg-muted transition"
                >
                  +
                </button>
              </div>

              <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-lg">
                Contact Seller
              </Button>
              <Button variant="outline" size="icon" className="px-6 bg-transparent">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Safety Tips */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground mb-1">Stay Safe</p>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>Meet in public places</li>
                    <li>Inspect items before payment</li>
                    <li>Use secure payment methods</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                High-quality condition product. Excellent performance and all features working perfectly. Comes with
                original packaging and accessories. No defects or issues. Perfect for someone looking for great value on
                campus marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MOCK_PRODUCTS.slice(0, 4).map((related) => (
              <Link key={related.id} href={`/products/${related.id}`}>
                <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden bg-muted h-40">
                    <img
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-lg font-bold text-primary">ETB {related.price.toLocaleString()}</p>
                    <h3 className="font-semibold text-foreground text-sm line-clamp-2">{related.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
