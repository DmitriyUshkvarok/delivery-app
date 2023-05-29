import { FilterList, FilterItem } from './FilterProducts.styleled';

const FilterProducts = ({ onFilterChange }) => {
  const handleItemClick = storeName => {
    onFilterChange(storeName);
  };

  const handleShowAll = () => {
    onFilterChange('');
  };

  return (
    <div>
      <FilterList>
        <FilterItem onClick={() => handleItemClick("McDonald's")}>
          McDonald's
        </FilterItem>
        <FilterItem onClick={() => handleItemClick('KFC')}>
          KFC (Kentucky Fried Chicken)
        </FilterItem>
        <FilterItem onClick={() => handleItemClick('Subway')}>
          Subway
        </FilterItem>
        <FilterItem onClick={() => handleItemClick('Burger King')}>
          Burger King
        </FilterItem>
        <FilterItem onClick={() => handleItemClick('Dominos Pizza')}>
          Domino's Pizza
        </FilterItem>
        <FilterItem onClick={handleShowAll}>Entire list</FilterItem>
      </FilterList>
    </div>
  );
};

export default FilterProducts;
