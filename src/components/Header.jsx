import { useEffect, useRef, useState } from 'react';
import { Compass, LayoutGrid, List, Moon, Search, Sun, X } from 'lucide-react';
import { locations } from '../data/locations';

export default function Header({ view, onViewChange, isDark, onToggleTheme, query, onSearch }) {
  const total = locations.length;
  const visited = locations.filter(l => l.status === 'visited').length;
  const planned = locations.filter(l => l.status === 'plan-to-visit').length;

  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  // Tighten the bar and add depth once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // "/" jumps to search (unless already typing somewhere)
  useEffect(() => {
    const onKey = e => {
      const tag = e.target.tagName;
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && !e.target.isContentEditable) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header-brand" aria-label="Wander List — back to top">
            <span className="brand-mark" aria-hidden="true">
              <Compass size={18} strokeWidth={1.5} />
            </span>
            <span className="brand-text">
              <span className="header-wordmark">Wander List</span>
              <span className="header-tagline">A curated travel journal</span>
            </span>
          </a>

          {/* Search Bar */}
          <div className="header-search">
            <Search size={15} className="search-icon" />
            <input
              ref={searchRef}
              id="location-search"
              type="search"
              className="search-input"
              placeholder="Search destinations…"
              value={query}
              onChange={e => onSearch(e.target.value)}
              aria-label="Search destinations"
              aria-keyshortcuts="/"
            />
            {query ? (
              <button
                className="search-clear"
                onClick={() => onSearch('')}
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            ) : (
              <kbd className="search-kbd" aria-hidden="true">/</kbd>
            )}
          </div>

          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{total}</span>
              <span className="stat-label">Places</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number stat-number-accent">{visited}</span>
              <span className="stat-label">Visited</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">{planned}</span>
              <span className="stat-label">To Visit</span>
            </div>
          </div>

          <div className="header-actions">
            {/* View Toggle */}
            <div className="view-toggle" role="group" aria-label="Switch view">
              <button
                id="toggle-grid"
                className={`toggle-btn ${view === 'grid' ? 'active' : ''}`}
                onClick={() => onViewChange('grid')}
                aria-label="Grid view"
                aria-pressed={view === 'grid'}
              >
                <LayoutGrid size={15} />
                Grid
              </button>
              <button
                id="toggle-list"
                className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
                onClick={() => onViewChange('list')}
                aria-label="List view"
                aria-pressed={view === 'list'}
              >
                <List size={15} />
                List
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              id="theme-toggle"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
