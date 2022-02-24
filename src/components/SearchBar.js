export default function SearchBar(props) {
    return(
        <div className="flex flex-row space-x-1">
            <input type="text" placeholder="Enter a Github Username" defaultValue={props.username} className="input input-bordered w-full max-w-xs glass" onChange={(e) => props.setUsername(e.target.value)}></input>
            <button className="btn btn-ghost" onClick={props.queryApi}>Get Profile</button>
        </div>
    )
} 