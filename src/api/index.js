import axios from 'axios'

const url = "https://raw.githubusercontent.com/JRC404/HarryPotterAPI/master/JsonFiles/HarryPotter.json"

const key = "?key=$2a$10$nxifFQ9eGSnhYGxluBj1L.83HGaW2jUI85qCpf9OBza9ftyhpBDQO"

export const fetchData = async () => {
    try {
        const { data } = await axios.get(`${url}`)
        console.log(data)
        return await data
        
    } catch (error) {
        console.log(error)
    }
}