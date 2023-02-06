import ImageShow from './ImageShow';

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        //anadiendo el key, no tenemos mas errores. ver notas
        return <ImageShow key={image.id} image={image} />;

    });

    return <div>{renderedImages}</div>;
}

export default ImageList;
