import { LayoutGrid, List, Search, X } from 'lucide-react';
import { locations } from '../data/locations';

export default function Header({ view, onViewChange, isDark, onToggleTheme, query, onSearch }) {
  const total = locations.length;
  const visited = locations.filter(l => l.status === 'visited').length;
  const planned = locations.filter(l => l.status === 'plan-to-visit').length;

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <div className="header-brand">
            <span className="header-wordmark">Wander List</span>
            <span className="header-tagline">A curated travel journal</span>
          </div>

          {/* Search Bar */}
          <div className="header-search">
            <Search size={15} className="search-icon" />
            <input
              id="location-search"
              type="search"
              className="search-input"
              placeholder="Search destinations…"
              value={query}
              onChange={e => onSearch(e.target.value)}
              aria-label="Search destinations"
            />
            {query && (
              <button
                className="search-clear"
                onClick={() => onSearch('')}
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>

          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{total}</span>
              <span className="stat-label">Places</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">{visited}</span>
              <span className="stat-label">Visited</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">{planned}</span>
              <span className="stat-label">To Visit</span>
            </div>
          </div>

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
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
