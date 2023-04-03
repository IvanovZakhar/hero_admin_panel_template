import { heroesFetchingDelete } from '../../actions';
import { useDispatch } from 'react-redux';
import {useHttp} from '../../hooks/http.hook';

const HeroesListItem = (props) => {
    let elementClassName;
    const {id, name, description, element} = props.props;
    const {request} = useHttp();
    const dispatch = useDispatch();
    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    return (
        <li 
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
            <img src="https://e7.pngegg.com/pngimages/49/613/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-dark.png" 
                 className="img-fluid w-25 d-inline" 
                 alt="unknown hero" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body">
                
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button type="button" className="btn-close btn-close" aria-label="Close" 
                onClick={()=> {
                    dispatch(heroesFetchingDelete(id))
                    request(`http://localhost:3001/heroes/${id}`, 'DELETE')
                            }}></button>
            </span>
        </li>
    )
}

export default HeroesListItem;