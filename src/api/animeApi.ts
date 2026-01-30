export interface Anime {
    mal_id: number
    title: string
    episodes: number 
    images: {
        jpg: {
            image_url:string
        }
    }
}

const BASE_URL = "https://api.jikan.moe/v4"

// Top Anime
export async function topAnime(): Promise<Anime[]> {
    const res = await fetch(`${BASE_URL}/top/anime`)
    const json = await res.json()
    return json.data
}