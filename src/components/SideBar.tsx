import { string } from 'prop-types';
import react, { useState } from 'react';

import { Button } from '../components/Button';

interface SidebarProps {
  genres: Array<any>,
  onSelectGenreId: any,
}

export function SideBar(props: SidebarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClick(genreId: number) {
    setSelectedGenreId(genreId);
    props.onSelectGenreId(genreId);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}