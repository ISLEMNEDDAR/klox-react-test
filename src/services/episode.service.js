import {RequestService} from "./utils/request.service";
const ROOT_URL = "https://rickandmortyapi.com/graphql"

export const getEpisodes = async (next) => {
    let requestBody = {
            query: `
                query{
                    episodes(page : ${next}){
                        info{
                           count
                           next
                        }
                        results{
                              id
                              name
                              episode
                        }
                    }
                }
            `
    }
    return (await RequestService.PostRequest(ROOT_URL,"",JSON.stringify(requestBody),false)).data
    //console.log(response)
}

export const getCharacters = async (next,episode) => {
    console.log("getCharacter")
    let requestBody = {
        query: `
                query{
                    episodes(page : ${next},filter:{episode : "${episode}"}){
                        info{
                           count
                           next
                        }
                        results{
                              episode
                              characters{
                                    image
                                    name
                                    species
                               }
                        }
                    }
                }
            `
    }
    return (await RequestService.PostRequest(ROOT_URL,"",JSON.stringify(requestBody),false)).data
    //console.log(response)
}
