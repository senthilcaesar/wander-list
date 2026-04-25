import { ExternalLink } from 'lucide-react';

export default function ExternalLinks({ links }) {
  if (!links?.length) return null;

  return (
    <div className="link-chips">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-chip"
        >
          {link.label}
          <ExternalLink size={10} />
        </a>
      ))}
    </div>
  );
}
