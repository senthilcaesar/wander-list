import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import StatusBadge from "./StatusBadge";
import StarRating from "./StarRating";
import ExternalLinks from "./ExternalLinks";
import { getGoogleMapsUrl } from "../utils/maps";

/**
 * Side panel with the full details for one place.
 * Esc closes it; ← / → step through the places currently shown.
 */
export default function LocationDrawer({ location, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, [location.id]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

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
  const linksWithMap = [
    ...links,
    { label: "View on Map", url: getGoogleMapsUrl(title, loc) },
  ];

  return (
    <div className="drawer-root">
      <div className="drawer-backdrop" onClick={onClose} />
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="drawer-media">
          {imageUrl && <img key={fullImageUrl} src={fullImageUrl} alt={title} />}
          <div className="drawer-controls">
            <button className="drawer-icon-btn" onClick={onPrev} aria-label="Previous place">
              <ChevronLeft size={18} />
            </button>
            <button className="drawer-icon-btn" onClick={onNext} aria-label="Next place">
              <ChevronRight size={18} />
            </button>
            <button
              ref={closeRef}
              className="drawer-icon-btn"
              onClick={onClose}
              aria-label="Close details"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="drawer-body">
          <div className="card-header">
            <div className="card-meta">
              <span className="card-overline">{category}</span>
              <h2 id="drawer-title" className="drawer-title">
                {title}
              </h2>
              <span className="card-location">
                <MapPin size={11} />
                {loc.city}, {loc.country} · {loc.continent}
              </span>
            </div>
            <StatusBadge status={status} />
          </div>

          <StarRating rating={rating} />

          <p className="drawer-description">{description}</p>

          <div className="drawer-special">
            <div className="special-label">✦ What's Special</div>
            <p>{whatsSpecial}</p>
          </div>

          <ExternalLinks links={linksWithMap} />
        </div>
      </aside>
    </div>
  );
}
