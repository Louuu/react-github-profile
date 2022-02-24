export default function ProfileCard(props) {

    const profileData = props.profileData

    return (
        <div class="card w-96 glass">
            <figure class="px-10 pt-10">
                <img src={profileData.avatar_url} alt="github avatar" class="rounded-xl"/>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{profileData.name}</h2>
                <h3>@{profileData.login}</h3>
                <p>{profileData.public_repos} Public Repos</p>
            </div>
        </div>
    )
}