


interface Places {
    name: string;
    location: string;
    about: string;
    googlemaps: string;
    image: string;
}

function FavPlaces(props: Places) {

    let { name, location, about, googlemaps, image } = props;
    let picname = `Picture of ${name}`;

    return (
    <div className="content"> <div className="imageContainer"> <img src={image} alt={picname}/> </div>
    <div>
        <h1> {name} </h1>
        <h2> {location} (<a href={googlemaps}>Map link</a>) </h2>
        <p>{about}</p>
        </div>
    </div>
    );
}

export default FavPlaces;