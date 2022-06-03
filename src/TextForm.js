import React from 'react'
import  {useState} from 'react'
export default function TextForm(propes) {
        //state
        const [text,setText] = useState('');
        
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
        let handleChange =(e)=>{ 
                //console.log('handle chande');
                setText(e.target.value)
        }
        
        //return statement
        
        
  return (
            <>
                {propes.title}
             <form className="form-floating">
                  <input type="text" className="form-control" value={text} onChange={handleChange} placeholder="Enterheretext"  />
                    <label>Enter your text hear</label>
               <button type="button" onClick={channgeToUpperCase}>Change to uppercase</button>
               <button type="button" onClick={channgeToLowwerCase}>Change to lowwercase</button>
             </form>
        
            </> 
  )
}
