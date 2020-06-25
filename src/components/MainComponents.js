import React, {Component} from 'react';
import Menu from'../components/MenuComponents';
import{Navbar,NavbarBrand} from 'reactstrap';
import DishDetail from './dishDetailedComponents';
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
            onClick={(dishId)=>this.onSelectedDish(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]}/>
      </div>
    )
  }
}

export default Main;
