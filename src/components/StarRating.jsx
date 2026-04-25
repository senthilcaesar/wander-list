import { Star } from 'lucide-react';

export default function StarRating({ rating, max = 5 }) {
  if (rating === 0) return null;

  return (
    <div className="star-rating" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={13}
          className={`star-icon ${i < rating ? 'filled' : ''}`}
          fill={i < rating ? 'currentColor' : 'none'}
          style={i < rating ? { animationDelay: `${i * 80}ms` } : undefined}
        />
      ))}
    </div>
  );
}
