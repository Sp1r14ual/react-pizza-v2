import React from 'react';


import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';


const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({name: 'популярности (ASC)', sortProperty: '-rating'});


  React.useEffect(() => {  
  setIsLoading(true);
  fetch(`https://62ce9ab9486b6ce8264883ae.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty.replace('-', '')}&order=${sortType.sortProperty.includes('-') ? "asc" : "desc"}`)
  .then(res => res.json())
  .then(arr => {
    setItems(arr);
    setIsLoading(false);
  });
  window.scrollTo(0, 0);
}, [categoryId, sortType]);


  return (
    <div className="container">
    <div className="content__top">
      <Categories categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
      <Sort value={sortType} setSortType={setSortType} />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {
        isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
      }
    </div>
  </div>
  );
};

export default Home;