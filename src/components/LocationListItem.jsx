import { MapPin } from 'lucide-react';
import StatusBadge from './StatusBadge';
import StarRating from './StarRating';
import ExternalLinks from './ExternalLinks';

function getCategoryClass(category) {
  const map = {
    Islands: 'art-islands',
    Historical: 'art-historical',
    Coastal: 'art-coastal',
    Mountains: 'art-mountains',
    Cities: 'art-cities',
  };
  return map[category] ?? 'art-islands';
}

export default function LocationListItem({ location, index = 0 }) {
  const { title, category, description, location: loc, status, rating, links, imageUrl } = location;

  return (
    <article
      className="location-list-item card-enter"
      style={{ animationDelay: `${index * 40}ms` }}
      aria-label={`${title}, ${loc.country}`}
    >
      <div className="list-item-inner">
        {/* Image or Color Block */}
        <div className={`category-art-sm ${!imageUrl ? getCategoryClass(category) : ''}`}>
          {imageUrl && <img src={imageUrl} alt="" className="category-img" loading="lazy" />}
        </div>

        {/* Content */}
        <div className="list-item-content">
          <div className="list-item-title-row">
            <h2 className="list-item-title">{title}</h2>
            <span className="list-item-category">{category}</span>
          </div>
          <p className="list-item-description">{description}</p>
          <div className="list-item-location">
            <MapPin size={11} />
            {loc.city}, {loc.country} · {loc.continent}
          </div>
        </div>

        {/* Right */}
        <div className="list-item-right">
          <StatusBadge status={status} />
          {rating > 0 && <StarRating rating={rating} />}
          <ExternalLinks links={links} />
        </div>
      </div>
    </article>
  );
}
