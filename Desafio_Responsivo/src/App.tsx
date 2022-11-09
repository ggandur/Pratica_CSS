import iphone_H from './assets/iphone14_horizontal.png'
import logo from './assets/logo.webp'
import './App.css'
import { useEffect, useState } from 'react'


function App() {

  // var [mobileView, setMobileView] = useState(false)

  // mobileView = window.matchMedia("(max-width: 765px)").matches

  // useEffect(() => {
  //   setMobileView(window.matchMedia("(max-width: 765px)").matches)
  // }, [mobileView])

  // const widthOutput = document.querySelector('#width');

  // function reportWindowSize() {
  //   widthOutput.textContent = window.innerWidth;
  // }

  //window.onresize = reportWindowSize;

  // if (mobileView) {
    return (
      <div className="HomePage">
        <div className="Column">
          <div className="Header">
            <div className="LogoDisplay">
              <img src={logo} id="logo" />
            </div>
            <ul className="NavBar">
              <li><a href='#'> Home </a></li>
              <li><a href='#'> Menu </a></li>
              <li><a href='#'> Produtos </a></li>
              <li><a href='#'> Lojas </a></li>
            </ul>
            <div className="CompreAgora">
              <h3>Compre Agora</h3>
            </div>
          </div>
          <div className="Title">
            <h1>Great Tech</h1>
            <h1>Great Code</h1>
          </div>
          <img src={iphone_H} id="Img_iphone" />
        </div>
      </div>
    )
  // }
  // else {
  //   return (
  //     <div className="HomePage">
  //       <div className="Column">
  //         <div className="Header">
  //           <div className="LogoDisplay">
  //           </div>
  //           <ul className="NavBar">
  //             <li><a href='#'> Home </a></li>
  //             <li><a href='#'> Menu </a></li>
  //             <li><a href='#'> Produtos </a></li>
  //             <li><a href='#'> Lojas </a></li>
  //           </ul>
  //           <div className="CompreAgora">
  //             <h3>Compre Agora</h3>
  //           </div>
  //         </div>
  //         <div className="Title">
  //           <h1>Great Tech</h1>
  //           <h1>Great Code</h1>
  //         </div>
  //         <img src={iphone_H} id="Img_iphone" />
  //       </div>
  //     </div>
  //   )
  // }
}

export default App
