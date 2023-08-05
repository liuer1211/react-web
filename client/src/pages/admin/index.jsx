import React,{ useEffect, useRef } from "react"
import './index.css'

import Img1 from '../../asstes/images/chuchang/b1.png'
import Img2 from '../../asstes/images/chuchang/b2.png'
import Img3 from '../../asstes/images/chuchang/b3.png'
import Img4 from '../../asstes/images/chuchang/b4.png'
import Img5 from '../../asstes/images/chuchang/b5.png'
import Img6 from '../../asstes/images/chuchang/g1.png'
import Img7 from '../../asstes/images/chuchang/g2.png'
import Img8 from '../../asstes/images/chuchang/g3.png'
import Img9 from '../../asstes/images/chuchang/g4.png'
import Img10 from '../../asstes/images/chuchang/g5.png'

let timer = null;

function Admin() {

  const idText = useRef()

  // 移动
  function moveNode(wnode){
    let start = window.scrollX || 0;
    let num = start + 200
    if(num >= wnode){
      window.scrollTo({
        top:0,
        left:wnode,
        behavior:'smooth'
      })
      clearInterval(timer)
    }else {
      window.scrollTo({
        top:0,
        left:num,
        behavior:'smooth'
      })
    }
  }

  // 初始移动
  const initfun = ()=>{
    let w = document.getElementById('sb').offsetlidth - document.documentElement.offsetwidth
    timer = setInterval(()=>{
      moveNode(w)
    },30000)
  }

  // 文字显示
  const sleepFun = (times)=> {
    let time = times || 0;
    time = Math.ceil(time/4) * 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    })
  }

  // 初始文字显隐
  const getText = async () =>{
    const p = document.querySelectorAll('#sb p')
    for(let i=0;i<p.length;i++){
      // console.log( p[i].textContent)
      // console.log( p[i].innerHTML)
      p[i].className = 'bold'
      const logStr = await sleepFun(p[i].textContent.length)
    }
  }

  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    setTimeout(()=>{
      initfun()
    },20000)
    setTimeout(()=>{
      getText()
    },8000)
  },[])
  
  return (
    <div className='novel'>
      <div id='sb' ref={idText} className="no-abs" >
        <p>
          后来查了一下，发现原来是
          <img src="" alt="" />
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是
        </p>
        <p>
          后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是后来查了一下，发现原来是
        </p>
        <img src="" alt="" />
      </div>
      <div className="no-fix">
      </div>
      <div className="fix1">
        <div className="msg one">
          夜灵犀传奇
          <span>之</span> 
          <span>邪剑黑曜</span> 
        </div>
        <div className="msg two">
          <div>
            <img className="img1 top" src={Img5} alt="" />
            <img className="img2 bot" src={Img4} alt="" />
            <img className="img3 top" src={Img3} alt="" />
            <img className="img4 bot" src={Img2} alt="" />
            <img className="img5 top" src={Img1} alt="" />
            <img className="img6 bot" src={Img6} alt="" />
            <img className="img7 top" src={Img7} alt="" />
            <img className="img8 bot" src={Img8} alt="" />
            <img className="img9 top" src={Img9} alt="" />
            <img className="img10 bot" src={Img10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
