import { useSelector } from 'react-redux';
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {filters} = useSelector(state => state);
    console.log(filters[0])
    const onFilterHero = (e) => {
        console.log(e)
    }
    const buttons = addButtons(filters[0], onFilterHero)
    console.log(buttons)
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {/* <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button> */}
                    {buttons}
                </div>
            </div>
        </div>
    )
}

const addButtons = (typeButton, filters) =>{
 
    const optionKeys = typeButton ? Object.keys(typeButton[0]) : null;
    const optionValues = typeButton ? Object.values(typeButton[0]) : null;
    console.log(optionKeys)
    console.log(optionValues)
    return( optionKeys ? optionKeys.map((item, i )=> {
        return(
            <>
                <button key={i} onClick={() => filters(item)} className={item}>{optionValues[i]}</button>
            </>
        )
    }): null)
}

export default HeroesFilters;