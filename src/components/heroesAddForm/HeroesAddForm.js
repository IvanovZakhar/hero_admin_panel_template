import {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useHttp} from '../../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { filtersFetched, onAddHeroesFetching } from '../../actions';
// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const dispatch = useDispatch();
    const {filters} = useSelector(state => state);
    useEffect(() => {
         
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
  

        // eslint-disable-next-line
    }, []);

    const {request} = useHttp();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const element = filters[0] ?  getOptions(filters[0]) : null;
    const onSubmitServers = (hero) => {
        hero.id = uuidv4();

        request("http://localhost:3001/heroes", "POST", `${JSON.stringify(hero)}`).then(data => dispatch(onAddHeroesFetching(data)))
    }

    return (
        <form className="border p-4 shadow-lg rounded" 
              onSubmit={handleSubmit(onSubmitServers)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                   {...register("name", {required:"Обязательное поле",
                                         minLength: {
                                                    value: 3,
                                                    message: "Минимальное число символов 3"
                                                }})}
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
 
                    />
                    
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    {...register("description", {required:"Обязательное поле",
                    maxLength: {
                               value: 20,
                               message: "Максимальное число символов 20"
                           }})}
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
         
                     
                    />
                     <div className="red">{errors.text ? errors.text.message : null}</div>
            </div>
         
            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <select 
                        {...register("element", { required: "Обязательное поле" })}
                        className="form-select" 
                        id="element" 
                        name="element">
                            <option>Я владею элементом...</option>
                            {element}
                    </select>
                    <div className="red">{errors.text ? errors.element.message : null}</div>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

const getOptions = (data) =>{
   
  return data.map((item) => {
        
        return (
            <>
                <option  key={item.id} value={item.value}>{item.name}</option> 
            </>
        )
    })
}

export default HeroesAddForm;