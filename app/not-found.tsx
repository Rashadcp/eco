import Link from "next/link";
import { EnnertyLogo } from "@/components/ui/BrandLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream-100 p-6 text-center text-ennerty-forest">
      <EnnertyLogo variant="light" className="mb-8" />
      <h1 className="text-6xl font-black font-display text-ennerty-forest">404</h1>
      <h2 className="text-2xl font-bold font-display mt-2 text-ennerty-forest">Page Not Found</h2>
      <p className="text-sm text-graphite-muted mt-2 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2.5 rounded-full bg-ennerty-forest text-cream-100 font-semibold text-sm hover:bg-ennerty-dark transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}
