import { useState } from "react";


function SearchBar ({onSubmit}) {

//PASO 1
const [term, setTerm] = useState('');

    const handleFormSubmit =  (event) => {
        event.preventDefault();
    // Usamos term. Super easy. No necesitamos queryselectors. 
        onSubmit(term)
    }


//PASO 2. Tambien lo referenciamos en onsubmit
const handleChange = (event) => {
//PASO 3. event.target.valueFORMA CORRECTA DE OBTENER EL VALOR.
//PASO 4. cambiamos el setterm al valor recogido
    setTerm(event.target.value);
}

    return (
        // TECNICA PARA PODER DETECTAR UN HIT DE ENTER, YA QUE GENERA UN SUBMIT EVENT
    <div className="mt-3 mb-3 row g-2 align-items-center justify-content-center">
        <h1 className="text-center text-light">REACT APP- Image Search</h1>
        <form className="col-auto" onSubmit={handleFormSubmit}>
            <input 
            className="form-control form-control-lg"
            value={term}
            onChange={handleChange}/>
        </form>
    </div>
    );
}

export default SearchBar;