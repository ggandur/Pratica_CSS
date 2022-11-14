import iphone_H from './assets/iphone14_horizontal.png'
import logo from './assets/logo.webp'
import './App.css'
import { useEffect, useState } from 'react'


function App() {

  const [mobileView, setMobileView] = useState(window.matchMedia("(max-width: 765px)").matches)

  useEffect(() => {
    window.addEventListener("resize", () => setMobileView(window.matchMedia("(max-width: 765px)").matches));
  }, [])

  return (
    mobileView ?
      <div className="HomePage">
        <div className="Column">
          <div className="Header">
            <img src={logo} id="logo" />
            <h3>Header mobile a fazer</h3>
          </div>
          <div className="SubTitle">
            <h3>
              A Tecnologia que fará seu código decolar para o próximo nível
            </h3>
          </div>
          <div className="CompreAgora">
              <button id='botaoComprar'>
                <h3>Compre Agora</h3>
              </button>
            </div>
          <div className="Title">
            <h1>Great Tech<br></br>Great Code</h1>
          </div>
          <img src={iphone_H} id="Img_iphone" />
        </div>
      </div>
      :
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
              <button id='botaoComprar'>
                <h3>Compre Agora</h3>
              </button>
            </div>
          </div>
          <div className="Title">
          <h1>Great Tech<br></br>Great Code</h1>
          </div>
          <img src={iphone_H} id="Img_iphone" />
        </div>
      </div>
  )
}

export default App
