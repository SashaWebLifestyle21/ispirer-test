import React, {useEffect, useState} from 'react';
import {getStoryById, IComment } from "../../api/News/fetchNews";
import Text from "../common-components/Text/Text";
import {convertDate} from "../../service/convertDate";
import {observer} from "mobx-react-lite";

interface ICommentItem {
    id: number
}

const CommentItem = observer(({ id }: ICommentItem) => {
    const [comment, setComment] = useState<null | IComment>(null)

    useEffect(() => {
        getStoryById(id).then(data => {
            setComment(data)
        })
    }, [])
    return (
        <div className='p-[10px] border-solid rounded-lg border-[1px] '>
            <div className='flex items-center justify-between'>
                <Text className='text-[18px]'>Автор:
                    <span className='text-secondary italic text-[18px]'> {comment && comment.by}</span>
                </Text>
                <Text className='text-[18px]'>Дата публикации: {comment && convertDate(comment.time)}</Text>
            </div>
            <Text>{comment?.text}</Text>
            <div className={'flex justify-end'}>
                <div className={'flex flex-col gap-y-[5px]'}>
                    {comment?.kids && comment.kids.map(kid => <><Text>Ответ</Text><CommentItem id={kid} /></>)}
                </div>
            </div>
        </div>
    );
});

export default CommentItem;