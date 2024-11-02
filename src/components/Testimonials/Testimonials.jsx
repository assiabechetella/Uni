import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/right.png'
import back_icon from '../../assets/back.png'
import user_1 from '../../assets/user1.png'
import user_2 from '../../assets/user2.png'
import user_3 from '../../assets/user3.png'
import user_4 from '../../assets/user4.png'

const Testimonials = () => {

    const slider = useRef();
    let translateX = 0;

    const slideForward = ()=>{
        if (translateX>-50){
            translateX -= 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }

    const slideBackward = ()=>{
        if (translateX<0){
            translateX += 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Willie Nelson</h3>
                            <span>Florida, USA</span>
                        </div>
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the 
                    best decisions I've ever made. The supportive community,
                     state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Willie Nelson</h3>
                            <span>Florida, USA</span>
                        </div>
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the 
                    best decisions I've ever made. The supportive community,
                     state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Willie Nelson</h3>
                            <span>Florida, USA</span>
                        </div>
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the 
                    best decisions I've ever made. The supportive community,
                     state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Willie Nelson</h3>
                            <span>Florida, USA</span>
                        </div>
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the 
                    best decisions I've ever made. The supportive community,
                     state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
