import React,{useState} from 'react'

const UseTimer = () => {
    const [count,setCount]=useState(60)
    const [val,setVal]=useState("Continue");
    const [isvisible,setIsvisible]=useState(true)
    function getadd(){
       if(isvisible){ 
        setVal("Failed")
       }
        clearImmediate(useTime)
    }
const useTime =setTimeout(() => {
    if(count<=0){
       
     getadd();
    }
   setCount(count-1);

},1000);

const handleSub=()=>{
    setIsvisible(false);
    setVal("Completed")
    
}

  return (
    <div>
         {count} &nbsp; {val}
         <button onClick={handleSub}>ClickOnComplete</button>
    </div>
  )
}

export default UseTimer