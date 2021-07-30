import React from 'react'
import styles from './styles.css'

export const Loader= ()=>{
    return (<div className="box">
            <div id="loader-wrapper">
                <div id="loader"></div>
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        </div>
    )
}