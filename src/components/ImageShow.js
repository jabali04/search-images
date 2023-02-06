function ImageShow ({image}) {
    return <div className="d-flex justify-content-center">
        <img 
        className="img-thumbnail mb-2"
        src={image.urls.small} 
        alt={image.alt_description}/>
    </div>;
}

export default ImageShow;