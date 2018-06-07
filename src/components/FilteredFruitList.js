import React, { Component } from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentDidMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }

  // render() {

const FilteredFruitList = (props) => {
    const list = !props.filter || props.filter === 'all' ? props.items : props.items.filter(i => i.fruit_type === props.filter);

    return (
      <ul className="fruit-list">
      
      </ul>
    );
  }

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: []
}



export default FilteredFruitList;
