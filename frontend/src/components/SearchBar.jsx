import ProfilePreview from "./ProfilePreview"
import PostPreview from "./PostPreview"

function SearchBar() {
    const searchProfiles = []; //based on search
    const searchPosts = [];
    //on the top of the home page, returns either people or posts
    return (
        <div className="searchBar">
            <input type="text" placeholder="Search..."></input>
            <div className="searchResults">
                {searchProfiles.map(user => (
                    <ProfilePreview key={user.id} user={user} />
                ))}
                <br />
                {searchPosts.map(post => (
                    <PostPreview key={post.id} post={post} />
                ))}
                {searchPosts.length === 0 && searchProfiles.length === 0 && <p>No results found</p>}
            </div>
        </div>
    )
}

export default SearchBar