import React, { useState } from 'react';
import "./styles.css";
import caixa from "../../assets/imagemlavitanx.png"
import logo22 from "../../assets/logo_22.png"
import Popup from '../Popup/index';
import video from "../../assets/video.mp4";

export function Csection () {

    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);}

    return(
      <div className="row2">
        <div className="col2 col-2" >
            <img className="imagem" src={caixa} alt="Logo"/>
          </div>
          <div className="col2 col-2" id="coluna1">
            <div className="wrapper">
              <div><img className="imagem22" src={logo22} alt="Logo"/></div>
              <div className="s11"><a href="https://www.comprecimed.com.br/products/suplemento-alimentar-lavitan-bio-complex-com-30-comprimidos"  target="_blank"><button class="button button1">Comprar</button></a><a href="https://flynowspaceclub.com.br/"  target="_blank"><button class="button button2">FlyNowSpaceClub</button></a></div>
              <div><button onClick={togglePopup} class="button button3">Vídeo Informativo</button></div>
            </div>
          <div>
            {isOpen && <Popup
              content={<>
                <iframe id="video_popup2" width="715" height="auto"
                src="https://www.youtube.com/embed/563aZcYpg0s">
                </iframe>
                <iframe id="video_popup" width="700" height="auto"
                src="https://www.youtube.com/embed/563aZcYpg0s">
                </iframe>
              </>}
              handleClose={togglePopup}
            />}
          </div>
        </div>
      </div>
      )
  };

export default Csection;

