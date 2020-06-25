import React, {Component} from 'react';
import Menu from'../components/MenuComponents';
import Header from './HeaderComponent';
import DishDetail from './dishDetailedComponents';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish : null
    };
  }
  onSelectedDish(dishId) {
    this.setState({
        selectedDish: dishId
    });
}
  render(){
    return(
      <div>
        <Header/>
        <Menu dishes={this.state.dishes}
            onClick={(dishId)=>this.onSelectedDish(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer />
      </div>
    )
  }
}

export default Main;
