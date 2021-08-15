import React from 'react'
import Typed from 'react-typed'; 

function Header() {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Anvar Khalidin Rəsmi veb səhifəsi</h1>
                <Typed
                className="typed-text"
                strings={[
                    'MERN stack veb proqramçı',
                    'proqramçı-mühəndis',
                    'Full-stack JavaScript trainer',
                    'Udemydə müəllim'
                    ]}
                    typeSpeed={40}
                    backSpeed={20}
                    loop >
                
                </Typed>

                <a href="#" className="btn-main-offer">Bizimlə əlaqə</a>
            </div>
        </div>
    )
}

export default Header
