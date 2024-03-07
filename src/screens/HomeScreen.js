import {useState} from "react"
import './HomeScreen.css'
import data from '../data.json'

function HomeScreen(){


    function clickHandler(e){
        e.preventDefault();
        const paraCountInput = document.querySelector("#para-count");
        const paraArray = data.paragraphs.slice(0, paraCountInput.value);
        if(paraCountInput.value > 8){
            alert("I am not strong enough to give that many paragraphs, But I will give you the maximum I can ")
        }
        setParaData(paraArray);
        paraCountInput.value = "0"
    }

    const [paraData , setParaData] = useState([]);

    return(
        <div id='container'>
            <header>
                <h1>TIRED OF BORING LOREM IPSUM?</h1>
                <form id="form">
                    <label htmlFor = "para-count">Paragraph:</label>
                    <input id='para-count' type='number' placeholder="Enter count" defaultValue="0" min={0} max={8}/>
                    <button onClick={(e)=>{
                        clickHandler(e);
                    }}>Generate</button>
                </form>
            </header>
            <main id="main">
                {
                    paraData.map((elem,index)=>{
                        return(
                            <p key = {index} className="para">{elem.para}</p>
                        )
                    })
                }
            </main>
        </div>
    )
}

export default HomeScreen;