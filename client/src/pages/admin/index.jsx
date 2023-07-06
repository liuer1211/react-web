import React,{ useEffect } from "react"
import './index.css'
let timer = null;

function Admin() {

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

  const initfun = ()=>{
    let w = document.getElementById('sb').offsetlidth - document.documentElement.offsetwidth
    timer = setInterval(()=>{
      moveNode(w)
    },10000)
  }

  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    initfun()
  },[])
  
  return (
    <div className='novel'>
      <div id='sb' className="no-abs" >
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
        <img src="" alt="" />
      </div>
      <div className="no-fix">
      </div>
      <div className="fix1">
      </div>
    </div>
  );
}

export default Admin;
