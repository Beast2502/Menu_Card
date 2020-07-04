import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment, fetchDishes} from '../redux/actionCreaters';

import Header from './Header';
import Footer from './Footer';
import Menu from './MenuComponents';
import Home from './Home';

import Contact from './Contact';
import DishDetail from './dishDetail';
import About from './About';



 class MainComponent extends Component {
     
     
    componentDidMount(){
        this.props.fetchDishes();
    }
    render() {
        const HomePage=()=>{
            return (
                <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]} 
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess = {this.props.dishes.errMess}
                promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}
                leader={this.props.leaders.filter((lead)=> lead.featured)[0]}
                />
            )
        }

        const DishWithId=({match})=>{
            console.log("Prop Addcomment",this.props.addComment)
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId,10))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess = {this.props.dishes.errMess}
                comments={this.props.comments.filter((comment)=> comment.dishId ===parseInt(match.params.dishId,10))}
                addComment={this.props.addComment}
                />
            )

        }

        const LeaderData=()=>{
            return(
                <About leaders={this.props.leaders}/>
            )
        }
        return (
            <>
     
            <Header/>
            
               
                <Switch>
                    <Route path="/home"component={HomePage}/>
                    <Route exact path="/menu" component={() =><Menu dishes={this.props.dishes}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact path="/about" component={LeaderData}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
          
           
           </>
        )
    }
}

const mapStateToProps= state =>{
    
    
    console.log("state",state)
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders:state.leaders
    }
    
}

const mapDispatchToProps=(dispatch)=>({
        addComment:(dishId,rating,author,comment)=> dispatch(addComment(dishId,rating,author,comment)),
        fetchDishes: ()=>{dispatch(fetchDishes())}
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));


