import React, {useEffect, useState} from 'react';
import {getStoryById, INews} from "../../api/News/fetchNews";
import Title from "../../components/common-components/Title/Title";
import {observer} from "mobx-react-lite";
import news from "../../store/news";
import {useNavigate} from "react-router-dom";
import Button from "../../components/common-components/Button/Button";
import Header from "../../containers/Header/Header";
import {convertDate} from "../../service/convertDate";
import Text from "../../components/common-components/Text/Text";
import CommentItem from "../../components/CommentItem/CommentItem";

interface IStoryPage {
    id: number
}

const StoryPage = observer(({ id }: IStoryPage) => {
    const [story, setStory] = useState<null | INews>(null)

    const navigate = useNavigate()

    useEffect(() => {
        const story = news.newsList.find(item => item.id === id)
        if(story) {
            setStory(story)
        }
    }, [])
    return (
        <>
            <Header />

            <div className={'container'}>
                <Button onClick={() => navigate(-1)}>Назад</Button>
                <a
                    href={story?.url}
                    target='_blank'
                >
                    <Title className='hover:text-secondary'>{story?.title}</Title>
                </a>
                <Text>Автор:
                    <span className='text-secondary italic'> {story && story.by}</span>
                </Text>
                <div className='flex items-center justify-between'>
                    <Text className='bg-primary text-white rounded-2xl p-[5px]'>Рейтинг:
                        <span className='text-gold'>{story && story.score}</span>
                    </Text>
                    <Text>Дата публикации: {story && convertDate(story.time)}</Text>
                </div>
                <div>
                    <Text>Комментариев ({story?.kids ? story.kids.length : 0})</Text>
                    <div className='flex flex-col items-center gap-y-[10px]'>
                        {story?.kids && story?.kids.map(comment => <CommentItem id={comment} /> )}
                    </div>
                </div>
            </div>
        </>
    );
});

export default StoryPage;