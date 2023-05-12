import React from 'react';
import StoryItem from "../StoryItem/StoryItem";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

interface IStoryList {
    storyIds: number[]
}

const StoryList = observer(({ storyIds }: IStoryList) => {
    return (
        <>
            {storyIds && storyIds.map(storyId => <Link key={storyId + 123} to={`/news/${storyId}`}><StoryItem key={storyId} id={storyId} /></Link>)}
        </>
    );
});

export default StoryList;