import React from 'react';
import Popups from './Tab';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';

const bg3 = require('./../../images/banner/bnr1.jpg');

function PortfolioGrid2(props) {
    return (
        <div>
            <Header2 />
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Portfolio</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Portfolio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-block">
                <div className="section-full content-inner bg-white portfolio-box">
                    <div className="container">
                        <div className="section-head text-black text-center m-b20">
                            <h2 className="m-b10">Our Portfolio</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        </div>
                        <SimpleReactLightbox>
                            <SRLWrapper  >
                                <Popups />
                            </SRLWrapper>
                        </SimpleReactLightbox>
                    </div>
                </div>
            </div >

            <Footer />
        </div >
    )
}

export default PortfolioGrid2;
