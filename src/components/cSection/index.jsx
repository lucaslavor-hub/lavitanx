import "./styles.css";
import caixa from "../../assets/imagemlavitanx.png"
import logo22 from "../../assets/logo_22.png"

export function Csection (){

    return(


<div className="row2">
            <div className="col2 col-2" >
                  <img className="imagem" src={caixa} alt="Logo"/>
                  </div>
                  <div className="col2 col-2" id="coluna1">
                  <div className="wrapper">
                    <div><img className="imagem22" src={logo22} alt="Logo"/></div>
                    <div className="s11"><button class="button button1">Comprar</button><button class="button button2">FlyNowClub</button></div>
                    <div><button class="button button3">Vídeo Informativo</button></div>
              </div>
            </div>
</div>
        )

    };
    
    export default Csection;

