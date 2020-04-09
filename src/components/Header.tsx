import React from 'react';
import { HeaderNavContainer } from '../ComponentsStyled';



export function Header() {

    return (
        <HeaderNavContainer >
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                <nav className="uk-navbar-container"
                    uk-navbar="true"
                    style={{
                        position: 'relative',
                        zIndex: 980
                    }}>
                    <div className="uk-navbar-center">

                        <span className="uk-navbar-item uk-logo">
                            <img src="img/logo.svg" style={{ width: 200 }} alt="Logo" />
                            <p className="uk-text-normal">Cards</p>

                        </span>

                    </div>
                </nav>
            </div>
        </HeaderNavContainer>
    )
}