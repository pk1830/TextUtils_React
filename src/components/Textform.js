import React ,{useState} from 'react';

export default function Textform(props)
{
    const HandleUpOnClick = () =>
    {
         let nexttext = text.toUpperCase();
         setText(nexttext);
          props.showAlert("Text is capitalised","success");
    }


 const HandleDownOnClick = () =>
    {
         let nexttext = text.toLowerCase();
         setText(nexttext);
           props.showAlert("Text is de-capitalised","success");
    }

    const HandlefupOnClick = () =>
    {
         let nexttext = text.charAt(0).toUpperCase() + text.slice(1); 
         setText(nexttext);    
          props.showAlert("First letter is capitalised","success");
      }


    const HandlefwordOnClick = () =>
    {      
         
 let nexttext = "";
    for (let i = 0; i < text.length; i++) {
      if (i === 0 || text.charAt(i - 1) === " ") {
        nexttext += text.charAt(i).toUpperCase();
      } else {
        nexttext += text.charAt(i);
      }
    }
 setText(nexttext);
        props.showAlert("Every first letter of word is capitalised","success");
      }

    const HandleOnchange = (event) => {
        setText(event.target.value)
    }
    const[text, setText] = useState("")

    return(
<>

<div className='container' style={props.thememode}>
<h1> {props.heading} </h1>
  <div className='mb-3' style={props.thememode}>
    <textarea style={props.thememode} className='form-control' placeholder='Enter the small text to convert ' onChange={HandleOnchange} value={text} id="mybox" rows="8"></textarea>
     <button className='btn btn-primary mx-2' onClick={HandleUpOnClick}>{props.uppercasebtn}</button>
    <button className='btn btn-primary mx-2' onClick={HandleDownOnClick}>{props.lowercasebtn}</button>
    <button className='btn btn-primary mx-2' onClick={HandlefupOnClick}>{props.flettercasebtn}</button>
    <button className='btn btn-primary mx-2' onClick={HandlefwordOnClick}>{props.fwordcasebtn}</button>
  </div>
  </div>

  <div className='container' style={props.thememode}>
    <h1> Text Summary</h1>
    <p>{text.split(" ").length} words with {text.length} letters</p>
    <p>Reading time {0.008 * text.split(" ").length}</p>
    <h1>Text Preview</h1>
    <p>{text}</p>
  </div>
</>

    );
}
