import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handleDownClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
    }
    const clearText = ()=>{
      let newText = '';
      setText(newText)
    }
    const reverseText = ()=>{
      let newText = [...text].reverse().join('');
      setText(newText)
    }

    const handelCopy =()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExSpace =()=>{
       let newText = text.replace(/\s+/g," ");
       setText(newText);
    }

    const handelchangeev = (e)=>{
        setText(e.target.value);
    }

   
  return (

   <>
    <div className="container">
    <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" onChange={handelchangeev} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To upperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert To lowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>clear Text</button>
        <button className="btn btn-primary mx-1" onClick={reverseText}>Reverse text</button>
        <button className="btn btn-primary mx-1" onClick={handelCopy}>copy text</button>
        <button className="btn btn-primary mx-1" onClick={removeExSpace}>Remove Extra Space</button>
    </div>

    <div className="container">
        <h2>This is your summary</h2>
        <h4>{text.split(" ").length} words and {text.length} charecters it should take {0.08*text.length} Seconds to read</h4>
        <h2>Preview is avaialble below</h2>
        <p>{text}</p>
    </div>
        
    </>
  )
}

