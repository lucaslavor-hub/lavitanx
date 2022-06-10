import "./styles.css";

export function Form (){

  return(
    <div className="outside-form-div" style={{textAlign: 'center'}}>
      <form method="POST"  action="https://ecommercecimed.activehosted.com/proc.php" target="_blank" id="_form7" className="_form _form_7 _inline-form _inline-style _dark" noValidate>
        <input type="hidden" name="u" defaultValue={7} />
        <input type="hidden" name="f" defaultValue={7} />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" defaultValue={0} />
        <input type="hidden" name="m" defaultValue={0} />
        <input type="hidden" name="act" defaultValue="sub" />
        <input type="hidden" name="v" defaultValue={2} />
        <input type="hidden" name="or" defaultValue="694f86de68067c9d1f85bd67652152da" />
        <div className="_form-content">
          <div className="_form_element _x64191235 _inline-style ">
            <div className="_field-wrapper">
              <input type="text" id="fullname" name="fullname" placeholder="Nome" required />
            </div>
          </div>
          <div className="bottom-buttons">
            <div className="_form_element _x50559507 _inline-style ">
              <div className="_field-wrapper">
                <input type="text" id="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className="_button-wrapper _inline-style">
              <button id="_form_7_submit" className="_submit" type="submit">
              Inscreva-se
              </button>
            </div>
          </div>
          <div className="_clear-element">
          </div>
        </div>
        <div className="_form-thank-you" style={{display: 'none'}}>
        </div>
      </form>
    </div>
  )

};

export default Form;
