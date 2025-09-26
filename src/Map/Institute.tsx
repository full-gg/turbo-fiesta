import { Link } from "react-router-dom";
import institute_office from "../img/institute_office.png"
import NumberOfQuestions1 from "./InstituteApp.tsx"
import home from '../img/home.png'
import map_icon from '../img/map_icon.png'

const Institute = () => {
    return (
        <div className="institute_main">
            <img src={institute_office} alt="" />  
            <NumberOfQuestions1 />
            <Link to="/">
              <img src={home} alt="" style={{position:'absolute', left:".5rem", top:"48rem", width:"5rem"} } />    
            </Link>
            <Link to="/Map">
                <img src={map_icon} alt="" style={{position:'absolute', left:"5.3rem", top:"48rem", width:"5rem"} } />    
            </Link>
        </div>
        
    )
}

export default Institute