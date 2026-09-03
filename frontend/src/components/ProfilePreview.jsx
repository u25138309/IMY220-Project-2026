import { Link } from "react-router-dom";
import base from "../assets/default.png";
function ProfilePreview({ user }) {
    return (
        <Link to={`/profile/${user.id}`}>
            <div className="profile-preview">
                <img src={user.profilePicture || base} alt={`${user.name}'s profile`} />
                <h1>{user.name}</h1>
            </div>
        </Link>
    )
}

export default ProfilePreview