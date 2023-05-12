import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import StoryPage from "./pages/StoryPage/StoryPage";
import {observer} from "mobx-react-lite";
import news from "./store/news";

function App() {

    useEffect(() => {
        news.getNews()
    }, [])
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Navigate replace to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='news/*'>
                {news.newsIds && news.newsIds.map(storyId => {
                    return <Route key={storyId} path={storyId.toString()} element={<StoryPage id={storyId} />}/>
                })}
            </Route>
        </Routes>
    </div>
  );
}

export default observer(App);
