import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program1.png'
import program_2 from '../../assets/program2.png'
import program_3 from '../../assets/program3.png'
import program_icon1 from '../../assets/program_icon1.png'
import program_icon2 from '../../assets/program_icon2.png'
import program_icon3 from '../../assets/program_icon3.png'

const Programs = () => {
  return ( 
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon1}/>
            <p>Licence Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon2}/>
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon3}/>
            <p>PhD Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
