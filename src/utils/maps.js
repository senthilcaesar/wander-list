export function getGoogleMapsUrl(title, loc) {
  const query = `${title}, ${loc.city}, ${loc.country}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
