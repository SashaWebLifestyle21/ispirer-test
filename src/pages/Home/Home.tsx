import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import news from "../../store/news";
import Header from "../../containers/Header/Header";
import Button from "../../components/common-components/Button/Button";
import StoryList from "../../components/StoryList/StoryList";

const Home = observer(() => {

    const [ids, setIds] = useState<number[]>([])
    useEffect(() => {
        setIds(news.newsIds)
    }, [news.newsIds])
    return (
        <>
            <Header />
            <div className='container'>
                <Button
                    className='mb-[20px]'
                    onClick={() => news.getNews()}
                >
                    Обновить
                </Button>
                <div className='flex flex-col gap-y-[10px]'>
                    <StoryList storyIds={ids} />
                </div>
            </div>
        </>

    );
});

export default Home;