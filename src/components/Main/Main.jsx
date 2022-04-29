import { useRef } from "react";

const Main = (props) => {
//   console.log(props)
const onSearchClick = () => {
 const nameCity = myRef.current.value;
 props.updateCity(nameCity);
}
const myRef = useRef(null)

    return(
        <div >
             
               <input ref={myRef} type='text' placeholder='City'  />
               <button onClick={onSearchClick}>search</button>
          
        </div>
    )
}

export default Main;