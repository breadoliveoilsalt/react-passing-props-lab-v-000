

from line 25 in filtered fruit list:

  // {list.map((item, index) => <li key={index}>{item.char}</li>)}

----

In fruit basket what I had before removing component:

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilterChange} />
        <FilteredFruitList
          filter={props.selectedFilter} />
      </div>
    );
}




const FilteredFruitList = (props) => {
    const list = !props.filter || props.filter === 'all' ? props.items : props.items.filter(i => i.fruit_type === props.filter);

    return (
      <ul className="fruit-list">

      </ul>
    );
  }


  return (
    <div>
    "FilteredFruitList yo!"


    </div>)
