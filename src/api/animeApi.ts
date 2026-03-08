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