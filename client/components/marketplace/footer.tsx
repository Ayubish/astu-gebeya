export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-3">ASTU Gebeya</h3>
            <p className="text-primary-foreground/70 text-sm">
              Your trusted campus marketplace for buying and selling items.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  New Listings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Trending
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          &copy; 2025 ASTU Gebeya. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
