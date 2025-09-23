import React, { Component } from 'react';
import { Grid, Typography } from '@mui/material';
import Nav from './nav';

function SingleProjectItem(props) {
    //constructor(props) {
    //super(props);
    //this.state = { activeTab: 0 };
    //}

    return (

        <div className="project">
            <div>
                <img src={props.cardImage} className="card-img"></img>
            </div>

            <div className='card-text'>
                <h4 className="card-title">{props.cardTitle}</h4>
                <p className="card-description">{props.cardDescription}</p>
                <a className="card-link-btn btn btn-outline-success btn--white btn--animated" href={props.cardLink}>View</a>
            </div>

        </div>
        // <Grid>
        //     <Cell col={4}>
        //         <div classname="project">
        //             <img src={props.cardImage} className="card-img"></img>
        //             <a>{props.cardName}</a>
        //         </div>
        //     </Cell>
        // </Grid>


    );
}


export default SingleProjectItem;
