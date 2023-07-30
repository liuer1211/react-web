import React,{ useEffect, useRef } from "react"
import './index.css'
import Haibao from '../../asstes/images/fengmian/haibao.png'
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
      // console.log( p[i].innerHTML.length)
      p[i].className = 'bold'
      const logStr = await sleepFun(p[i].innerHTML.length)
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
          <img src={Haibao} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
