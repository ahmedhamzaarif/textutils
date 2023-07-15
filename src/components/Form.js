import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!", "success")
    }
    const handleCopy = () => {
        var newText = document.getElementById('myText')
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Copied to clipboard!", "success")
    }
    const handleSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }
    
    return(
        <div id="form" style={{color: props.theme==='dark'?'white':'#353535', backgroundColor: props.theme==='dark'?'#353535':'white'}}>
            <h2 className="text-capitalize mb-3">{props.heading}</h2>
            <textarea id="myText" className="form-control my-3" rows='8' value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter your text here" style={{color: props.theme==='dark'?'white':'#252525', backgroundColor: props.theme==='dark'?'#252525':'white', borderColor: props.theme==='dark'?'#252525':'#ced4da'}}></textarea>
            <div className="mb-3">
                <button className="btn btn-info me-2 mb-1" onClick={(handleUpClick)}>Convert to UpperCase</button>
                <button className="btn btn-info me-2 mb-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-info me-2 mb-1" onClick={handleSpace}>Remove Extra Spaces</button>
                <button className="btn btn-info me-2 mb-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger me-2 mb-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="row justify-content-between align-items-center">
                <span className="col-md-4">
                    <h5 class="mb-0">Your Text Summary:</h5>
                </span>
                <span id="btn-group" className="col-md-8 d-flex justify-content-end">
                    <button className={`btn btn-outline-${props.theme==='dark'?'light':'dark'} ms-2 mb-1`}>Characters: {text.length}</button>
                    <button className={`btn btn-outline-${props.theme==='dark'?'light':'dark'} ms-2 mb-1`}>
                        {/* Words: {text.split(' ').length} */}
                        {/* Words: {text.length === 0 ? 0: text.split(' ').length} */}
                        Words: {text.split(' ').filter((element)=>{return element.length!==0}).length}
                    </button>
                    <button className={`btn btn-outline-${props.theme==='dark'?'light':'dark'} ms-2 mb-1`}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</button>
                </span>
            </div>
            <div className="p-3 my-3" style={{backgroundColor: props.theme==='dark'?'#252525':'white', border: props.theme==='dark'?'1px solid #252525':'1px solid #ced4da'}}>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter text above to preview it'}</p>
            </div>
        </div>
    )
}
