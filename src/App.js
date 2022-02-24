import { useEffect, useState } from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import Message from "./components/Message"
import ProfileCard from "./components/ProfileCard"

export default function App() {

    const [username, setUsername] = useState("Louuu")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [profileData, setProfileData] = useState(undefined)

    const queryApi = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            setProfileData(response.data)
            setError(false)
            setLoading(false)
            
        } catch (error) {
            console.error(error)
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        queryApi()
    }, [])

    return(
        <div className="bg-gradient-to-br from-blue-400 to-blue-800 h-screen overflow-scroll">
            <div className="container m-auto p-4 flex items-center justify-center flex-col space-y-4">
                <SearchBar username={username} setUsername={setUsername} queryApi={queryApi}/>
                {
                    loading ? <Message content="Loading"/> : 
                    <>
                        {
                            error ? <Message content="Error Loading GitHub Profile"/> :
                            <ProfileCard profileData={profileData}/>
                        }
                    
                    </>

                    
                }
            </div>
        </div>
    )
}