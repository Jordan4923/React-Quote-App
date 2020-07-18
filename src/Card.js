import React from 'react'
import classes from './card.module.css'
const Card = (props) =>{

    return(
        <div className="container"> 
        <div className="row">
        <div className="col-sm-2"></div>

        <div className="col-sm-8">

        <div className={`card ${classes.contain}`}>
            <div className="card-header">
                <strong> <h4 className="text-center"> Here is a Advice for you</h4></strong>
                </div>
                <div className="card-body text-center">
                    <h5 className={classes.color}>{props.advice}</h5>
                    <p className="card-text color"> <small>A advice Card</small></p>
                    <button type="button" className="btn btn-dark btn-group-lg" onClick={props.getAdvice}>Get a new quote !</button>
                    </div>
                    
                </div>
        </div>

        <div className="col-sm-2"></div>
      </div>
      </div>

    )
}
export default Card