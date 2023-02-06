import axios from "axios";

// async, tenemos que usarlo con await
// await hace esperar al codigo por una respuesta.

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID jYmM-SjJgUUtDFe_tHBjD4O8enNl2vhBY1rVVBBHWAI'
        },
        params: {
            query: term,
        }
    })
    // console.log(response.data.results)
    return response.data.results;
}

export default searchImages;
