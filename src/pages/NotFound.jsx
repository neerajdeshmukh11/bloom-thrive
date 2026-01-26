import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-primary animate-pulse-soft" />
        </div>
        <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page seems to be taking a nap.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
