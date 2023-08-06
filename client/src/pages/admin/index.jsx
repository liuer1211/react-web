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
    // setTimeout(()=>{
    //   initfun()
    // },20000)
    setTimeout(()=>{
      getText()
    },8000)
  },[])
  
  return (
    <div className='novel'>
      <div id='sb' ref={idText} className="no-abs" >
        <p style={{fontWeight:700,fontSize:36}}>
          夜灵犀传奇之邪剑黑曜
        </p>
        <p style={{paddingTop:40,fontSize:22}}>
          <div>
            年少轻狂气如虹，
            暮年病榻万事空。
          </div>
          <div>
            江湖纷争何时休，
            笑看痴人坠其中。
          </div>
        </p>
        <p style={{paddingRight:10}}>
          序言
          <div style={{paddingLeft:10,lineHeight:1.5}}>
            &nbsp;&nbsp;世人只知李白的一篇《蜀道难》是恭送友人入蜀，殊不知这位青莲剑客还在意蜀地的另一个传说。
            相传三国时期，铸剑名家打造了三把赫赫有名的宝剑，
            分别是：黑曜、赤灵、素渊。传闻只要得其一把便可得天下，
            而这三把宝剑也被魏蜀吴三国的君主各占其一。
            几百年过去了，有传言黑曜在蜀地现世，像李白这样的剑客又怎能不心动。
            但是天意弄人，青莲剑客至死也未曾得见这把绝世宝剑。
          </div>
        </p>
        <p style={{paddingRight:10}}>
          <div style={{paddingLeft:10,lineHeight:1.5}}>
            &nbsp;&nbsp;七百多年过去了，这把剑又横空出世，江湖再掀腥风血雨。
            也正在这期间，一位年纪不满二十的少年，打破了这沉寂已久的江湖，此人便是夜灵犀。
            没有人知道这少年从哪里来，师出何门何派，只记得他只身一人前往少林，挑战主持方丈后全身而退。
          </div>
        </p>
        <p>
          <div style={{paddingLeft:10,lineHeight:1.5}}>
            &nbsp;&nbsp;相传五代十国时期，后唐开国皇帝李存勖曾得到这把旷世神兵，并建立了自己的王朝。
            然而神兵黑曜最易蛊惑人心，也被称为邪剑，李存勖因这把剑称帝，也因这把剑灭亡，这把也随着后唐的灭亡消失了踪迹。
          </div>
        </p>
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
