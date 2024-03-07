import React from 'react'
import "./Getstarted.css"

const Getstarted = () => {
  return (
    <section id="getstarted" className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With Homyz</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from us
                    <br />
                    Find your residence soon
                </span>
                <span>
                    <button className="button">
                        <a href="mailto:anhoai0310@gmail.com">Get Started</a>
                    </button>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Getstarted