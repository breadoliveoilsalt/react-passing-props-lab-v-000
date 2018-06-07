

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
