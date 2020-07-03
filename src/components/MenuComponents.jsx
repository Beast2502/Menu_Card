import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Card,CardImg,CardImgOverlay,CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap'

import {Link} from 'react-router-dom';
import '../App.css'

export default class Menu extends Component {
 
    render() {
        const menu= this.props.dishes.map((dish)=>{
            return (
                
                    <Card>
                      <Link to={`/menu/${dish.id}`}>  
                            <CardImg width="100%" height="100%" src={dish.image} alt={dish.name}/>
                        
                            <CardImgOverlay>
                            <CardTitle heading><b>{dish.name}</b></CardTitle>
                            
                            </CardImgOverlay>
                        </Link>
                    </Card>
                    
        
            )
        });
        return (
            <div className="container">
               <div className="row">
                   
                   <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                   </Breadcrumb>
                   <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                   </div>
               </div>
                <div className="row">
                   {menu}
                 </div>
               
            </div>
        )
    }
}
