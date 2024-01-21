import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {PostService} from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import MyButton from "../components/UI/button/MyButton";

const GoodPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [good, setGood] = useState({})
    const [comments, setComments] = useState([])
    const [fetchingGoods, isLoadingGood, errorGood] = useFetching(async () => {
        const [responseGood, responsePhoto] = await PostService.getGoodByID(params.id)
        setGood({...responseGood, ...responsePhoto})
    })

    const [fetchingComments, isLoadingComments, errorComments] = useFetching(async () => {
        const response = await PostService.getCommentsByID(params.id)
        setComments(response)
    })

    useEffect(() => {
        fetchingGoods()
        fetchingComments()
    }, []);


    return (
        <div className='goods__page'>
            <div className='back__Btn'>
                <MyButton onClick={() => navigate('/goods/')}>Назад</MyButton>
            </div>
            <div className='good__pageContainer'>
                {isLoadingGood
                    ? <MyLoader />
                    : <div className='good__about'>
                        <img src={good.url} alt={good.title}/>
                        <h1 className='title'>
                            {good.title}
                        </h1>
                        <div>
                            {good.body}
                        </div>
                    </div>
                }
                {errorGood && <h1 className='title'>Ошибка {errorGood}</h1>}
                {isLoadingComments
                    ? <MyLoader />
                    : <div className='good__comments'>
                        <h1 className='title'>Комментарии</h1>
                        {comments.map(comm =>
                            <div key={comm.id}>
                                <strong>
                                    {comm.email}
                                </strong>
                                <div>
                                    {comm.body}
                                </div>
                                <hr className='separator__comments'/>
                            </div>
                        )}
                    </div>
                }
                {errorComments && <h1 className='title'>Ошибка {errorComments}</h1>}
            </div>
        </div>
    );
};

export default GoodPage;