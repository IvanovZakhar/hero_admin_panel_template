import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useHttp} from '../../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { filtersFetched } from '../../actions';
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
    
   const element = getOptions(filters[0])
    return (
        <form className="border p-4 shadow-lg rounded" 
              onSubmit={handleSubmit(data => console.log(data))}>
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
                    {...register("text", {required:"Обязательное поле",
                    maxLength: {
                               value: 20,
                               message: "Максимальное число символов 20"
                           }})}
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
         
                     
                    />
            </div>

            <div className="mb-3">
                        {element}
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

const getOptions = (data) =>{
    const optionKeys = data ? Object.keys(data[0]) : null;
    const optionValues = data ? Object.values(data[0]) : null;
    const elem = optionKeys ? optionKeys.map((item, i) => {
        return (
            <>
                <option value={item}>{optionValues[i]}</option> 
            </>
        )
    }) : null;
    return(
        <>
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                        <option>Я владею элементом...</option> 
                        {elem}
                </select>
        </>
    )
}

export default HeroesAddForm;