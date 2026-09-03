import { useParams } from "react-router-dom";
import AlbumPreview from "../components/AlbumPreview";
import ProfileEditor from "../components/ProfileEditor";
import PostPreview from "../components/PostPreview";
import ProfilePreview from "../components/ProfilePreview";
import base from "../assets/default.png";
function ProfilePage() {
    const { id } = useParams();
    const albums = [{ id: "201", title: "Summer Adventures", images: ["/assets/sunset.jpg", "/assets/hike.jpg", "/assets/city.jpg"] }, { id: "202", title: "My Favourite Photos", images: ["/assets/coffee.jpg", "/assets/city.jpg", "/assets/sunset.jpg"] }, { id: "203", title: "Weekend Trips", images: ["/assets/hike.jpg", "/assets/sunset.jpg", "/assets/coffee.jpg"] }]; // Placeholder for albums data
    const friends = [{ id: "2", name: "Sarah Smith", profilePicture: "/assets/2.png" }, { id: "3", name: "Michael Jones", profilePicture: "/assets/3.png" }, { id: "4", name: "Emily Brown", profilePicture: "/assets/4.png" }, { id: "5", name: "Daniel Williams", profilePicture: "/assets/5.png" }]; // Placeholder for friends data, use Id of profile
    const user = {
        id: id,
        name: "John Doe",
        bio: "This is my profile.",
        profilePicture: null // Placeholder for user data, uses id to find
    }; // Placeholder for user data, uses id to find
    const posts = [{ id: "101", title: "Beautiful Sunset", image: "/assets/sunset.jpg", note: "Watched an amazing sunset today!", likesNum: 24, author: { id: "1", name: "John Doe", profilePicture: "/assets/1.png" }, comments: [{ id: "c1", author: { id: "2", name: "Sarah Smith", profilePicture: "/assets/2.png" }, text: "Amazing photo!" }, { id: "c2", author: { id: "3", name: "Michael Jones", profilePicture: "/assets/3.png" }, text: "That sunset looks incredible." }] }, { id: "102", title: "Weekend Hike", image: "/assets/hike.jpg", note: "Had a great time hiking with friends.", likesNum: 17, author: { id: "1", name: "John Doe", profilePicture: "/assets/1.png" }, comments: [{ id: "c3", author: { id: "4", name: "Emily Brown", profilePicture: "/assets/4.png" }, text: "Looks like a fun hike!" }] }, { id: "103", title: "City Lights", image: "/assets/city.jpg", note: "The city looks completely different at night.", likesNum: 31, author: { id: "3", name: "Michael Jones", profilePicture: "/assets/3.png" }, comments: [{ id: "c4", author: { id: "5", name: "Daniel Williams", profilePicture: "/assets/5.png" }, text: "Great shot!" }, { id: "c5", author: { id: "1", name: "John Doe", profilePicture: "/assets/1.png" }, text: "The lighting is really nice." }] }, { id: "104", title: "Coffee Break", image: "/assets/coffee.jpg", note: "Nothing beats a good coffee while working.", likesNum: 12, author: { id: "4", name: "Emily Brown", profilePicture: "/assets/4.png" }, comments: [] }]; // Placeholder for posts data, uses id to find
    //will need to fetch the albums and friends data from the backend using the user id
    //styling will need to done so that it fits nicely into the block.
    return (
        <div className="profile-page">
            <div className="profile-top">
                <div className="profile-segment">
                    <div className="profile-friends">
                        <h1>Friends</h1>
                        <ul>
                            {friends.map((friend) => (
                                <li key={friend.id}>
                                    <ProfilePreview user={friend} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="profile-segment">
                    <div className="profile-details">
                        { /*Will change with backend and DB*/}
                        <img src={user.profilePicture || base} alt={`${user.name}'s profile`} />
                        <h1>{ user.name }</h1>
                        <p>{user.bio}</p>
                        {user.id === Number(localStorage.getItem("userId")) ?
                            <div className="edit-profile-section">
                                <button onClick={() => {/* Handle edit profile */ }}>Edit Profile</button>
                                <div className="edit-profile-section" hidden><ProfileEditor user={user} /></div>
                            </div>
                            :
                            <div className="friend-section">
                                <div className="friend-status">
                                    You are{friends.some(friend => friend.id === user.id) ? " " : " not "}friends with this user.
                                </div>
                                <img className="friend-request" src="../assets/friend-request.png" alt="Friend Request" onClick={() => {/* Handle friend request */}} /> { /* will change based on if you had the request or sending */}
                            </div>
                        }
                    </div>
                </div>

                <div className="profile-segment">
                    <div className="profile-albums">
                        <h1>Albums</h1>
                        <ul>
                            {//maybe need to pass a few images so it can display preview
                                albums.map((album) => (
                                    <li key={album.id}>
                                        <AlbumPreview album={album} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="profile-bottom">
                <ul className="post-list">
                    {posts.map((post) => (
                        <li className="post-list-item" key={post.id}>
                            <PostPreview post={post} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfilePage