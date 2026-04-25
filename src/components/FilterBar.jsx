import { LayoutGrid, List } from 'lucide-react';
import { categories, statuses } from '../data/locations';

export default function FilterBar({ view, onViewChange, activeCategory, onCategoryChange, activeStatus, onStatusChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar-left">
        {/* Category Filter */}
        <div className="filter-group">
          <div className="filter-chips" role="group" aria-label="Filter by category">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => onCategoryChange(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div className="filter-group">
          <div className="filter-chips" role="group" aria-label="Filter by status">
            {statuses.map(s => (
              <button
                key={s}
                className={`filter-chip ${activeStatus === s ? 'active' : ''}`}
                onClick={() => onStatusChange(s)}
                aria-pressed={activeStatus === s}
              >
                {s}
              </button>
            ))}
          </div>
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
    </div>
  );
}
