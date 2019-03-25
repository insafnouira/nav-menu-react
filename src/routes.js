import React,{Component} from 'react'; 
import {Route,Link} from 'react-router-dom';
import './App.css'
class Routes extends Component {
    
     Home = () => (
        <h1>Home  here</h1>
      )


     Services = () => (
               <div className='nested-services'>
                    <Link className='link' to="/services/for-entrepreneurs">For entrepreneurs</Link> <br/>
                    <Link className='link' to="/services/for-students">For students</Link> <br/>
                    <Link className='link' to="/services/for-hobbyists">For hobbyists</Link>
                    <div>
                        <Route  path="/services/for-entrepreneurs" render={() => 'entrepreneurs'} />
                        <Route  path="/services/for-students" render={() => 'students'} />
                        <Route  path="/services/for-hobbyists" render={() => ' hobbyists'} />
                    </div>    
                </div>
      )
     

      Contact = () => (
        <h1>Contacts here</h1>
      )
   
   
      render() { 

        return (
           
                
            <div>
                <Route exact path="/" component={this.Home} />
                <Route  path="/services" component={this.Services} />
                <Route  path="/contact" component={this.Contact} />
            </div>
            
            
          );
    }
}
 
export default Routes;