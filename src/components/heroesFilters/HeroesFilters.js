import { useSelector, useDispatch } from 'react-redux';
import { onUpCondition } from '../../actions';
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {filters} = useSelector(state => state);
    const dispatch = useDispatch();
 
    const onFilterHero = (condition) => dispatch(onUpCondition(condition));
 
    const buttons = filters[0] ? addButtons(filters[0], onFilterHero) : null;
    
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                     <button onClick={() => onFilterHero('all')} className="btn btn-outline-dark active">Все</button>
                     {buttons}
                </div>
            </div>
        </div>
    )
}

const addButtons = (typeButton, filters) =>{

    return typeButton.map((item) => {
        return(
            <>
                <button  key={item.id} onClick={() => filters(item.value)} className={`btn ${item.style}`}>{item.name}</button>
            </>
        )
    })
 

}

export default HeroesFilters;