import { CheckCircle, Circle } from 'lucide-react';

export default function StatusBadge({ status }) {
  if (status === 'visited') {
    return (
      <span className="badge badge-visited" title="Visited">
        Visited
      </span>
    );
  }
  return (
    <span className="badge badge-plan" title="Plan to Visit">
      Plan to Visit
    </span>
  );
}
