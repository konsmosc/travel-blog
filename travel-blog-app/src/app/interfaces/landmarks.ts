export interface Landmark {
    objectId: string,
    title: string,
    short_info: string,
    description: string,
    url: string,
    order: number,
    photo: string
    photo_thumb: string,
    location: number[]
}

export interface ListLandmarksResponse {
    result: Landmark[]
}
