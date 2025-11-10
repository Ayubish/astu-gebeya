import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-2">
        <ShoppingBag className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
        ASTU Gebeya
      </span>
    </Link>
  )
}
