import {makeAutoObservable} from "mobx";
import { getStoryIds, INews} from "../api/News/fetchNews";



class News {

    newsIds: number[] = []
    newsList: INews[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addNews(news: INews) {
        this.newsList.push(news)
    }

    getNews() {
        getStoryIds().then(data => this.newsIds = data)
    }
}

export default new News()