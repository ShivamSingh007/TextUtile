import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpCick=()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    }

    const handleLoCick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
    }

    const handleClearCick=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success")
    }

    const handleCopyCick=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra white Space","success");
    }

    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text="new Text" ; // This is wrong way to change the state
    //setText("Shivam Singh"); // Correct way to change the state
    return (
        <>
        <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
            <h2 className="mb-3">{props.heading}</h2>
            <div className="mb-3">
                 <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" 
                 style={{background:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpCick}>Convert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoCick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopyCick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleClearCick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Priview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
