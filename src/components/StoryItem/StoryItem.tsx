import React, {useEffect, useState} from 'react';
import {getStoryById, INews} from "../../api/News/fetchNews";
import Title from "../common-components/Title/Title";
import Text from "../common-components/Text/Text";
import {convertDate} from "../../service/convertDate";
import news from "../../store/news";
import {observer} from "mobx-react-lite";

interface IStory {
    id: number
}

const StoryItem = observer(({ id }: IStory) => {
    const [story, setStory] = useState<null | INews>(null)

    useEffect(() => {
        getStoryById(id).then(data => {
            setStory(data)
            news.addNews(data)
        })
    }, [])
    return (
        <div className='p-[10px] border-solid rounded-lg border-2 border-primary cursor-pointer'>
            <Title>{story && story.title}</Title>
            <Text>Автор:
                <span className='text-secondary italic'> {story && story.by}</span>
            </Text>
            <div className='flex items-center justify-between'>
                <Text className='bg-primary text-white rounded-2xl p-[5px]'>Рейтинг:
                    <span className='text-gold'>{story && story.score}</span>
                </Text>
                <Text>Дата публикации: {story && convertDate(story.time)}</Text>
            </div>

        </div>
    );
});

export default StoryItem;