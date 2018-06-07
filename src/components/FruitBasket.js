import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     filters: [],
  //     selectedFilter: null
  //   };
  // }

  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }
const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter filters={props.filters} handleChange={props.updateFilterCallback} />
        <FilteredFruitList fruit={props.fruit} filter={props.currentFilter}/>
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
