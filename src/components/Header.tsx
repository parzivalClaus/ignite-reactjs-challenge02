import { string } from 'prop-types';
import react, { useState } from 'react';


interface HeaderProps {
    selectedGenre: any;
}

export function Header(props: HeaderProps) {

    function handleClick(genreId: number) {

    }

    return (
        <header>
            <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
        </header>
    )
}