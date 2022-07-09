import React from 'react'
import "../styles/Home.css"

function HomePage() {
  return (
    <div className='home'>
      <div className='weightBTN'>
        <button>
          Weight Tracker
        </button>
      </div>
      <div className='bmiBTN'>
      <button>
          BMI Calculator
      </button>
    </div>

    </div>
  )
}

export default HomePage