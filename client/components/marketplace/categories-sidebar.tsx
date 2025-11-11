"use client"

import { ChevronRight, Smartphone, Laptop, Book, Headphones, PenTool, Sofa, Wrench, Droplet, ShoppingBag, Sparkles } from "lucide-react"

interface CategoriesSidebarProps {
  selectedCategory?: string
  onSelectCategory?: (category: string) => void
}

const categories = [
  { id: "phones", name: "Mobile Phones", count: 1245, icon: Smartphone },
  { id: "pcs", name: "PC & Laptops", count: 987, icon: Laptop },
  { id: "earphones", name: "Earphones & Earpods", count: 852, icon: Headphones },
  { id: "books", name: "Books & Notes", count: 2345, icon: Book },
  { id: "snacks", name: "Snacks & Peanut Butter", count: 623, icon: ShoppingBag },
  { id: "beauty", name: "Beauty & Self-care", count: 412, icon: Sparkles },
  { id: "drinks", name: "Water & Drinks", count: 789, icon: Droplet },
  { id: "furniture", name: "Furniture & Room Items", count: 354, icon: Sofa },
  { id: "stationery", name: "Stationery & Supplies", count: 1023, icon: PenTool },
  { id: "services", name: "Campus Services", count: 198, icon: Wrench },
]

export default function CategoriesSidebar({ selectedCategory, onSelectCategory }: CategoriesSidebarProps) {
  return (
    <aside className="hidden md:block w-64 bg-background border-r border-border sticky top-24 h-[calc(100vh-96px)] overflow-y-auto shadow-sm">
      <div className="p-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Browse Categories
        </h3>

        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory?.(category.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0 text-left">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                      isSelected ? "bg-primary-foreground/20" : "bg-muted"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  </span>

                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{category.name}</p>
                    <p
                      className={`text-xs ${
                        isSelected ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {category.count.toLocaleString()} listings
                    </p>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 ml-2 ${
                    isSelected ? "text-primary-foreground" : "text-muted-foreground"
                  }`}
                />
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
