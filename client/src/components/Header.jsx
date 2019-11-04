import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import site_logo from './site-logo.png';
import { h1, a } from '../styles';

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    height: 80px;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 0 18px;
    img {
        width: 40px;
        height: 35px;
        margin: 5px 10px;
    }
    h1 {
        text-align: center;
        font-size: ${h1};
        font-weight: 100;
        font-family: 'Dosis', sans-serif;
    }
    a {
        text-decoration: none;
        color: #333333;
    }
    ul {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        align-content: center;
        a {
            margin: 0px 20px;
            white-space: nowrap;
            font-size: ${a};
            font-family: 'Dosis', sans-serif;
        }
        a:hover {
            text-decoration: underline;
        }
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <div>
                <Link to='/'><img src={site_logo} alt='Looktease Logo' /></Link>
            </div>
            <div>
                <Link to='/'><h1>looktease</h1></Link>
            </div>
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