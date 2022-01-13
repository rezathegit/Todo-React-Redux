import { VISIBILITY_FILTER } from '../constants';
import { setFilter } from '../redux/actions';
import { useDispatch } from 'react-redux';

export const VisibilityFilter = () => {

  const dispatch = useDispatch();

  return (

    <div className="filters-container">
      <div>
        {Object.keys(VISIBILITY_FILTER).map(filterkey => {
          const currentFilter = VISIBILITY_FILTER[filterkey];
          return (
            <button className="filters-btn"
              key={`visibility-filter-${currentFilter}`}
              onClick={() => dispatch(setFilter(currentFilter))}
            >{currentFilter}
            </button>
          )
        })}
      </div>
    </div>

  )
}