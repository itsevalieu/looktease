import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: rgb(169, 210, 243);
    height: 80px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>LookTease</h1>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </StyledHeader>
    );
}