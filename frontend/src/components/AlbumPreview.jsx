import { Link } from "react-router-dom";
function AlbumPreview({ album }) {
    //need to style so that images are on top of eachother in a stack.
    return (
        <Link to={`/album/${album.id}`}>
            <div className="album-preview">
                <img src={album.images[0]} alt="Empty Album" />
                <img src={album.images[1]}  alt=""/>
                <img src={album.images[2]}  alt=""/>
                <h2>{album.title}</h2>
            </div>
        </Link>
    );
}

export default AlbumPreview;