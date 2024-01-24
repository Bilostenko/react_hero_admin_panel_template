import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { heroCreate } from '../../actions';
import { useHttp } from '../../hooks/http.hook';

const HeroesAddForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');
    const {request} = useHttp();

    const dispatch = useDispatch();

    const clearFields = () => {
        setName('');
        setDescription('');
        setElement('');
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const newHero = {
            id: uuidv4(),
            name: name,
            description: description,
            element: element
        }
        request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
        .then(dispatch(heroCreate(newHero)))
        .then(() => clearFields())
        .catch(err => console.log(err));   
        
    }
    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Name of new hero</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    // id="name" 
                    onChange={event => setName(event.target.value)}
                    placeholder="What is your name?" />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Description</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    // id="text" 
                    placeholder="Tell us something about your hero"
                    onChange={event => setDescription(event.target.value)}
                    style={{ "height": '130px' }} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Choose hero element</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    onChange={event => setElement(event.target.value)}
                    name="element">
                    <option >I have the element of...</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="wind">Wind</option>
                    <option value="earth">Earth</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default HeroesAddForm;