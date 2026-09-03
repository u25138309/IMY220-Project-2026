function ProfileEditor({ user }) {
    //popup
    return (
        <div className="form-popup">
            <form id="editForm">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Username" defaultValue={user.username} required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" defaultValue={user.email} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" defaultValue={user.password} required />

                <label htmlFor="picture">Profile Picture</label>
                <input type="file" id="picture" placeholder="Picture" defaultValue={user.picture} accept="image/*" />

                <button type="submit">
                    Save Changes
                </button>
            </form>
        </div>
    )
}

export default ProfileEditor