import React,{useState} from 'react';

export default function TextForms(props) {
    const [text,setText]=useState('I am Azlan Inshallah one day I will be best Developer');

    //-------------------------- text="asdfgsa"//wrong way state cannot update this ------//
    //--------- setText('this is update text')//State are update dy using this function-----//

    //---------------------Writing Functions of text Area------------------//
    const handleUpClick=()=>{

        // console.log("upper case is clicked");
        let newText=text.toUpperCase();
        setText(newText);
    };

    const handleloClick=()=>{

        // console.log("upper case is clicked");
        let newText=text.toLowerCase();
        setText(newText);
    };
     
    let handlecleartxt=()=>{

        // console.log("clear text is clicked");
        let text= ' ';
        setText(' ');
    };


    let speak = () => {
        // console.log("text to voice is clicked")
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    let copyText = () => {
        navigator.clipboard.writeText(text);
    };
    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] != undefined){
                joinedWords += elem + ' ';
                console.log(joinedWords);
            }
        });
        setText(joinedWords);
    }; 
    

      
    ////---------------------------------------ON Change Function------------------//////////
    const handleOnChange=(event)=>{
        // console.log("handle is changed")
        setText(event.target.value);
    };
    //----------------------------------------Color Changing ----------------------//////////
    const [myStyle,setMyStyle]=useState({
        backgroundColor:'white',
        color:'black'
    });
    const [btnText,setbtnText]=useState('Enable Dark Mode');

    const darkMode =()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                backgroundColor:'black',
                color:'white'
            }
            );
            setbtnText('enable Light Mode');
        }
        else{
            setMyStyle({
                backgroundColor:'white',
                color:'black'
            }
            );
            setbtnText('enable Dark Mode'); 
        }
    };


    return (
        <>
            <div className="container my-3 "style={{backgroundColor : props.mode==='dark'?'#323232':'white',
                color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* -------------------------------------Buttons---------------------------------------- */}
                    <textarea className="form-control" id="myBox" style={{backgroundColor : props.mode==='light'?'white':'#323232',color: props.mode==='dark'?'white':'black'}}value={text} rows="8" onChange={handleOnChange} ></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleloClick}>Convert to Lower Case</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handlecleartxt}>Clear Text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={copyText}>Copy text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces }>Remove Extra Space</button>
                    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                    {/* <button className="btn btn-primary my-3 mx-1 " onClick={darkMode} >{btnText}</button> */}
                </div>

                <div className="container" style={{backgroundColor : props.mode==='light'?'white':'#323232'}}>
                    <p>My text have {text.split(' ').length} Words and {text.length} chracters</p>
                    <p>{0.008*text.split(' ').length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}

