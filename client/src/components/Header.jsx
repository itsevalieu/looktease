import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/encyclopedia'>Encyclopedia</NavLink>
                </ul>
            </nav>
        </StyledHeader>
    );
}