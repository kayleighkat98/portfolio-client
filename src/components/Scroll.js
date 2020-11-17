import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
// import {FaArrowCircleDown} from 'react-icons/fa'; //IMPORT DOWN ARROW 

const Scroll = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  //  CREATE FUNCTION TO SCROLL DOWN 88VH EACH CLICK(TO NEXT COMPONENT)
  // const scrollBy = () =>{ 
  //   window.scrollBy(0, 88 * window.innerHeight/100)
  // }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>
        {/*UNCOMMENT WHEN BUG IS FIXED*/}
        {/* <FaArrowCircleDown className="scrollDown" onClick={scrollBy} style={{height: 40, display: 'flex', right:40}} /> */}
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    </>
  );
}

export default Scroll;