import "./styles.css";
import Form from "./Form/index";
import logo_2 from "../../assets/logo_2.png";

export function Footer (){

  return(
    <div className="row2">
      <div className="col2 col-2">
        <div className="text-newsletter">
          <h2 className="text1">INSCREVA-SE EM NOSSA <span className="news">NEWSLETTER</span></h2>
          <span className="text2">Fique por dentro das novidades da CIMED</span>
        </div>
      </div>
      <div className="col2 col-2">
        <div className="form">
          <Form></Form>
        </div>
      </div>
      <div className="coluna">
        <a href="https://cimedremedios.com.br"  target="_blank"> <img className="logof" src={logo_2} alt="Logo"/>   </a>            
      </div>
      <div className="row2">
        <span className="icon lightStar">
          <a href="https://www.instagram.com/cimedremedios/"  target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M21 6H11C8.23858 6 6 8.23858 6 11V21C6 23.7614 8.23858 26 11 26H21C23.7614 26 26 23.7614 26 21V11C26 8.23858 23.7614 6 21 6Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.9997 15.3703C20.1231 16.2025 19.981 17.0525 19.5935 17.7993C19.206 18.5461 18.5929 19.1517 17.8413 19.53C17.0898 19.9082 16.2382 20.0399 15.4075 19.9062C14.5768 19.7726 13.8095 19.3804 13.2145 18.7855C12.6196 18.1905 12.2274 17.4232 12.0938 16.5925C11.9601 15.7619 12.0918 14.9102 12.47 14.1587C12.8483 13.4072 13.4539 12.794 14.2007 12.4065C14.9475 12.019 15.7975 11.8769 16.6297 12.0003C17.4786 12.1262 18.2646 12.5218 18.8714 13.1286C19.4782 13.7355 19.8738 14.5214 19.9997 15.3703Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.5 10.5H21.51" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
          </a>
        </span>
        <span className="icon darkStar">
          <a href="https://www.youtube.com/c/CIMEDRem%C3%A9dios"  target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M28.0796 9.81759C27.9413 9.26503 27.6596 8.75875 27.263 8.34989C26.8664 7.94103 26.3689 7.64407 25.8208 7.489C23.8183 7 15.8079 7 15.8079 7C15.8079 7 7.79756 7 5.79497 7.53558C5.24688 7.69064 4.74941 7.9876 4.35282 8.39646C3.95622 8.80532 3.67455 9.3116 3.53624 9.86417C3.16974 11.8965 2.99046 13.9582 3.00067 16.0233C2.9876 18.1039 3.16689 20.1813 3.53624 22.229C3.68872 22.7644 3.9767 23.2514 4.37237 23.643C4.76804 24.0346 5.25802 24.3175 5.79497 24.4644C7.79756 25 15.8079 25 15.8079 25C15.8079 25 23.8183 25 25.8208 24.4644C26.3689 24.3094 26.8664 24.0124 27.263 23.6035C27.6596 23.1947 27.9413 22.6884 28.0796 22.1358C28.4433 20.1188 28.6225 18.0728 28.6152 16.0233C28.6282 13.9426 28.4489 11.8652 28.0796 9.81759V9.81759Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.1875 19.8313L19.8822 16.024L13.1875 12.2168V19.8313Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </span>
        <span className="icon darkStar">
          <a href="https://www.facebook.com/GrupoCimed"  target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M21.5 10.5H21.51" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 6H18C16.6739 6 15.4021 6.52678 14.4645 7.46447C13.5268 8.40215 13 9.67392 13 11V14H10V18H13V26H17V18H20L21 14H17V11C17 10.7348 17.1054 10.4804 17.2929 10.2929C17.4804 10.1054 17.7348 10 18 10H21V6Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </span>
      </div>
      <div className="n">
        <div className="s111">
          <p><a id="a1" href="https://cimedremedios.com.br/politica-de-privacidade/"  target="_blank" ><u>Política de Privacidade e Termos de Uso</u></a></p>
        </div>
      </div>
      <div>
        <h3 className="direito">© 2022 Todos os Direitos Reservados </h3>
      </div>
    </div>
  )
};
    
    export default Footer;

