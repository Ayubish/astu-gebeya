"use client"

import { ChevronRight } from "lucide-react"

interface CategoriesSidebarProps {
  selectedCategory?: string
  onSelectCategory?: (category: string) => void
}

const categories = [
  { id: "phones", name: "Mobile Phones", count: 1245, icon: "📱" },
  { id: "pcs", name: "PC & Laptops", count: 987, icon: "💻" },
  { id: "earphones", name: "Earphones & Earpods", count: 852, icon: "🎧" },
  { id: "books", name: "Books & Notes", count: 2345, icon: "📚" },
  { id: "snacks", name: "Peanut Butter & Snacks", count: 623, icon: "🥜" },
  { id: "beauty", name: "Beauty Products", count: 412, icon: "💄" },
  { id: "drinks", name: "Jarred Water & Drinks", count: 789, icon: "💧" },
  { id: "furniture", name: "Furniture & Room Items", count: 354, icon: "🛋️" },
  { id: "stationery", name: "Stationery", count: 1023, icon: "✏️" },
  { id: "services", name: "Services", count: 198, icon: "🔧" }
]

export default function CategoriesSidebar({ selectedCategory, onSelectCategory }: CategoriesSidebarProps) {
  return (
    <aside className="hidden md:block w-64 bg-card border-r border-border sticky top-24 h-[calc(100vh-96px)] overflow-y-auto">
      <div className="p-4">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Browse Categories</h3>
        <nav className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory?.(category.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-foreground"
              }`}
            >
              <div className="flex items-center gap-3 text-left flex-1 min-w-0">
                <span className="text-xl flex-shrink-0">{category.icon}</span>
                <div className="min-w-0">
                  <p className="font-medium text-sm leading-tight">{category.name}</p>
                  <p
                    className={`text-xs ${selectedCategory === category.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {category.count.toLocaleString()} ads
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 flex-shrink-0 ml-2" />
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
