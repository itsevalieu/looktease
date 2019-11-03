import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}