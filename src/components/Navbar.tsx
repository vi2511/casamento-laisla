import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        fontSize: '18px',
        fontWeight: 500,
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <Link to="/">Início</Link>
      <Link to="/our-story">Nossa História</Link>
      <Link to="/wedding-info">Informações</Link>
      <Link to="/gallery">Galeria</Link>
      <Link to="/rsvp">RSVP</Link>
    </nav>
  );
}
