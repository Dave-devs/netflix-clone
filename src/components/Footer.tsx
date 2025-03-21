import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-netflix-black py-10 mt-auto">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="text-netflix-gray font-medium">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-netflix-gray hover:text-white text-sm transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse" className="text-netflix-gray hover:text-white text-sm transition">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/browse?category=new" className="text-netflix-gray hover:text-white text-sm transition">
                  New & Popular
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-netflix-gray font-medium">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-netflix-gray font-medium">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-netflix-gray font-medium">Account</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-netflix-gray hover:text-white text-sm transition">
                  Media Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-netflix-gray text-sm">
            &copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

