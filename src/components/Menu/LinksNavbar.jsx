import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'; 
import '../../assets/styles/components/LinksNavbar.scss'; 



function LinksNavbar () {

    return (
        <Fragment>
        <div className="navBar">
            
            <Link className="linkMenu">Conócenos</Link>
            <Link className="linkMenu">Que Hacemos</Link>
            <Link className="linkMenu"> Hazte Parte</Link>
            <Link className="linkMenu">Te Contamos</Link>
            <Link className="linkMenu"> Contáctanos</Link>
        </div>
        </Fragment>
    ) };

export default LinksNavbar;