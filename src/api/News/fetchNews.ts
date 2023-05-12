import axios from "axios";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const newStoryUrl = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`

export interface INews {
    id: number
    by: string
    descendants: number
    kids: number[]
    score: number
    time: number
    title: string
    type: string
    url: string
}

export interface IComment {
    id: number
    by: string
    parent: number
    kids: number[]
    score: number
    time: number
    text: string
    type: string
}

export const getStoryIds = async () => {
    const { data } = await axios.get(newStoryUrl)
    return data.slice(0, 100)
}

export const getStoryById = async (id: number) => {
    const { data } = await axios.get(`${storyUrl + id}.json`)
    return data
}

