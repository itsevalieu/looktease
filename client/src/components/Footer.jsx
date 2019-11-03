import React from 'react';

export default function Footer() {
    return (
        <footer>
            <p><span>&copy; Copyright {(new Date().getFullYear())}</span>, Eva Lieu</p>
        </footer>
    );
}