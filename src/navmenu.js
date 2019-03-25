import React,{Component} from 'react';
import { Link } from "react-router-dom";
import './App.css'
class Navmenu extends Component {
    
    render() { 
        return ( 

            <div className="linkk" >
                <Link className='link' to="/">Home </Link>
                 <Link className='link' to="/services">Services </Link>
                 <Link className='link' to="/contact">Contact</Link>
            </div>
         );
    }
}
 
export default Navmenu;