import React from 'react'
import  {useState} from 'react'

export default function TextForm(propes) {
        //state
        const [text,setText] = useState(
                        
        );
        
        //function defination 
        let channgeToUpperCase =()=>{ 
                console.log('okoko');
                let newtext = text.toLocaleUpperCase();
                setText(newtext);
        
        }
        let channgeToLowwerCase =()=>{ 
                console.log('okoko');
                let newtext = text.toLowerCase();
                setText(newtext);
        
        }
        let changeToClear =()=>{ 
                console.log('okoko');
                let newtext = '';
                        
                setText(newtext);
        
        }
        let likeItButton =()=>{ 
                let newtext = text
                setText(newtext);
                console.log('okoko');
                
        
        }
        let handleChange =(e)=>{ 
                //console.log('handle chande');
                setText(e.target.value)
        }
        
        //return statement
        
        
  return (
            <>
            <div className="container my-5 border border-primary">
                {propes.title}
             <form className="form-floating">
                  <input type="text" className="form-control mt-2 "  value={text} onChange={handleChange} placeholder="Enterheretext"  />
                    <label>Enter your text hear</label>
               <button className='btn btn-primary  mt-3' type="button" onClick={channgeToUpperCase}>Change to uppercase</button>
               <button  className='btn btn-secondary mt-3 mx-2'type="button" onClick={channgeToLowwerCase}>Change to lowwercase</button>
               <button  className='btn btn-secondary mt-3 mx-2'type="button" onClick={changeToClear}>Clear text</button>
               <button  className='btn btn-secondary mt-3 mx-2'type="button" onClick={likeItButton}>likeItbutton</button>
             </form>
                <b>Your Stracture</b>
                <p>Words Counter:{text.split('').length}  </p>
                <p>Time:{0.008*text.split('').length} </p>
                <b>Priview:-</b>
                <h6>{text}</h6>
                </div>
            </> 
  )
}
