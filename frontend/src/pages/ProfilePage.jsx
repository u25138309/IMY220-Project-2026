import { useParams } from "react-router-dom";
import AlbumPreview from "../components/AlbumPreview";
function ProfilePage() {
    const { id } = useParams();
    const albums = []; // Placeholder for albums data
    const friends = []; // Placeholder for friends data
    const user = {}; // Placeholder for user data, uses id to find
    //will need to fetch the albums and friends data from the backend using the user id
    //styling will need to done so that it fits nicely into the block.
    return (
        <div className="profile-page">
            <div className="profile-top">
                <span className="profile-segment">
                    <div className="profile-friends">
                        <h1>Friends</h1>
                        <ul>
                            {friends.map((friend) => (
                                <li key={friend.id}>{friend.name}</li>
                            ))}
                        </ul>
                    </div>
                </span>

                <span className="profile-segment">
                    <div className="profile-details">
                        { /*Will change with backend and DB*/}
                        <img src={`/assets/${id}.png`} alt="Profile Pic" />
                        <h1>{ user.name }</h1>
                        <p>{user.bio}</p>
                        {user.id == localStorage.getItem("userId") && <div className="friend-section">
                                <div className="friend-status">
                                    You are friends with {user.name} {/* will change based on if you are friends or not */}
                                </div>
                                <img className="friend-request" src="../assets/friend-request.png" alt="Friend Request" /> { /* will change based on if you had the request or sending */}
                            </div>
                        }
                    </div>
                </span>

                <span className="profile-segment">
                    <div className="profile-albums">
                        <h1>Albums</h1>
                        <ul>
                            {//maybe need to pass a few images so it can display preview
                                albums.map((album) => (
                                    <li key={album.id}>
                                        <AlbumPreview album={album} />
                                    </li>
                                ))}
                        </ul>
                    </div>
                </span>
            </div>
            <div className="profile-bottom">
                { }
            </div>
        </div>
    );
}

export default ProfilePage