import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {

// ultima parte!
    const [images, setImages] = useState([]);

// TERM lo recibimos de child element. Es la busqueda del user. Tambien, recordar debemos hacer que react/js esperen por el resultado de la funcion ssearchimage!!
    const handleSubmit = async (term) => {
        const result =  await searchImages(term)
        setImages(result)
    };


    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
        );
}

export default App;