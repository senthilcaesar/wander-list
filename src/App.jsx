import { useState, useMemo, useTransition, useRef, useEffect } from 'react';
import Header from './components/Header';
import LocationCard from './components/LocationCard';
import LocationListItem from './components/LocationListItem';
import { locations } from './data/locations';
import { MapPin } from 'lucide-react';

function EmptyState({ query, onClear }) {
  return (
    <div className="empty-state">
      <MapPin className="empty-state-icon" />
      <h2 className="empty-state-title">No results for "{query}"</h2>
      <p className="empty-state-text">Try a different keyword — city, country, or category.</p>
      <button className="btn btn-warm-sand" onClick={onClear}>Clear search</button>
    </div>
  );
}

export default function App() {
  const [view, setView]     = useState('grid');
  const [isDark, setIsDark] = useState(true);
  const [query, setQuery]   = useState('');
  const [isPending, startTransition] = useTransition();
  const viewKey = useRef(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return locations;
    return locations.filter(loc =>
      loc.title.toLowerCase().includes(q) ||
      loc.category.toLowerCase().includes(q) ||
      loc.description.toLowerCase().includes(q) ||
      loc.whatsSpecial.toLowerCase().includes(q) ||
      loc.location.city.toLowerCase().includes(q) ||
      loc.location.country.toLowerCase().includes(q) ||
      loc.location.continent.toLowerCase().includes(q)
    );
  }, [query]);

  function handleToggleTheme() { setIsDark(prev => !prev); }

  function handleViewChange(next) {
    startTransition(() => {
      viewKey.current += 1;
      setView(next);
    });
  }

  function handleSearch(q) {
    startTransition(() => setQuery(q));
  }

  return (
    <>
      <Header
        view={view}
        onViewChange={handleViewChange}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        query={query}
        onSearch={handleSearch}
      />

      <main>
        <div className="container">
          {filtered.length === 0 ? (
            <EmptyState query={query} onClear={() => setQuery('')} />
          ) : view === 'grid' ? (
            <div
              key={`grid-${viewKey.current}-${query}`}
              className="locations-grid view-enter"
              style={{ opacity: isPending ? 0.7 : 1, transition: 'opacity 150ms ease' }}
            >
              {filtered.map((loc, i) => (
                <LocationCard key={loc.id} location={loc} index={i} />
              ))}
            </div>
          ) : (
            <div
              key={`list-${viewKey.current}-${query}`}
              className="locations-list view-enter"
              style={{ opacity: isPending ? 0.7 : 1, transition: 'opacity 150ms ease' }}
            >
              {filtered.map((loc, i) => (
                <LocationListItem key={loc.id} location={loc} index={i} />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <p className="footer-text">
              Wander List · {locations.length} destinations · {locations.filter(l => l.status === 'visited').length} explored
            </p>
            <p className="footer-text" style={{ color: 'var(--color-border-warm)' }}>
              Built with React 19 + Vite
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
