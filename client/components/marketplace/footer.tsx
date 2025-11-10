export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ASTU Gebeya</h3>
            <p className="text-primary-foreground/70 text-sm">
              Your trusted campus marketplace for buying and selling items.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Browse</h4>
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
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
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
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 ASTU Gebeya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
