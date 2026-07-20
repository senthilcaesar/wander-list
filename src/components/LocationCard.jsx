import { MapPin } from "lucide-react";
import StatusBadge from "./StatusBadge";
import StarRating from "./StarRating";
import ExternalLinks from "./ExternalLinks";

function getCategoryClass(category) {
  const map = {
    Islands: "art-islands",
    Historical: "art-historical",
    Coastal: "art-coastal",
    Mountains: "art-mountains",
    Waterfalls: "art-waterfalls",
    Farms: "art-farms",
    Cities: "art-cities",
  };
  return map[category] ?? "art-islands";
}

export default function LocationCard({ location, index = 0 }) {
  const {
    title,
    category,
    description,
    whatsSpecial,
    location: loc,
    status,
    rating,
    links,
    imageUrl,
  } = location;
  const fullImageUrl = imageUrl?.startsWith("/")
    ? `${import.meta.env.BASE_URL}${imageUrl.slice(1)}`
    : imageUrl;

  return (
    <article
      className="location-card card-enter"
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`${title}, ${loc.country}`}
    >
      {/* Image or Category Art Panel */}
      <div
        className={`category-art ${!imageUrl ? getCategoryClass(category) : ""}`}
      >
        {imageUrl ? (
          <img
            src={fullImageUrl}
            alt={title}
            className="category-img"
            loading="lazy"
          />
        ) : (
          <div className="art-vignette" />
        )}
      </div>

      <div className="card-body">
        {/* Header */}
        <div className="card-header">
          <div className="card-meta">
            <span className="card-overline">{category}</span>
            <h2 className="card-title">{title}</h2>
            <span className="card-location">
              <MapPin size={11} />
              {loc.city}, {loc.country}
            </span>
          </div>
          <StatusBadge status={status} />
        </div>

        {/* Description */}
        <p className="card-description">{description}</p>

        {/* What's Special */}
        <div>
          <div className="special-label">✦ What's Special</div>
          <p className="card-special">{whatsSpecial}</p>
        </div>

        {/* Footer */}
        <div className="card-footer">
          <StarRating rating={rating} />
          <ExternalLinks links={links} />
        </div>
      </div>
    </article>
  );
}
