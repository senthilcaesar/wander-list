import { MapPin } from "lucide-react";
import StatusBadge from "./StatusBadge";
import StarRating from "./StarRating";
import ExternalLinks from "./ExternalLinks";
import { getGoogleMapsUrl } from "../utils/maps";

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

export default function LocationCard({ location, index = 0, onOpen }) {
  const {
    title,
    category,
    description,
    location: loc,
    status,
    rating,
    links,
    imageUrl,
  } = location;
  const fullImageUrl = imageUrl?.startsWith("/")
    ? `${import.meta.env.BASE_URL}${imageUrl.slice(1)}`
    : imageUrl;
  const linksWithMap = [
    ...links,
    { label: "View on Map", url: getGoogleMapsUrl(title, loc) },
  ];

  return (
    <article
      className="location-card card-enter is-clickable"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        if (!e.target.closest("a")) onOpen?.(location.id);
      }}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen?.(location.id);
        }
      }}
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

        {/* Footer */}
        <div className="card-footer">
          <StarRating rating={rating} />
          <ExternalLinks links={linksWithMap} />
        </div>
      </div>
    </article>
  );
}
