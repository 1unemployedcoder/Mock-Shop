import React, {useEffect, useMemo, useState} from "react";
import '../styles/styles';
import {useGoods} from "../hooks/useGoods";
import {useFetching} from "../hooks/useFetching";
import {PostService} from "../API/PostService";
import {pages} from "../utils/pages";
import GoodBar from "../components/GoodBar";
import MyLoader from "../components/UI/loader/MyLoader";
import GoodsList from "../components/Goods/GoodsList";
import Pagination from "../components/Pagination";
import GoodsFilter from "../components/Goods/GoodsFilter";

function Goods() {
    const [postsBody, setPostsBody] = useState([])
    const [img, setImg] = useState([])
    const [goods, setGoods] = useState([])
    const [goodsCart, setGoodsCart] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(9)
    const [page, setPage] = useState(1)

    const searchedAndSortedGoods = useGoods(selectedSort, searchQuery, goods)

    const [fetchingPosts, isLoading, errorPost] = useFetching(async () => {
        const responsePosts = await PostService.getPosts(limit, page)
        const responseImg = await PostService.getImg(limit, page)
        const totalCount = responsePosts.headers['x-total-count']
        setTotalPages(pages(totalCount, limit))
        setPostsBody(responsePosts.data)
        setImg(responseImg.data)
    })

    useEffect(() => {
        const combinedPosts = postsBody.map((post, index) => {
            return {...post, url: img[index].url, price: Math.ceil(Math.random() * 100) + 1};
        });
        setGoods(combinedPosts);
    }, [postsBody, img]);

    useEffect(() => {
        fetchingPosts()
    }, [page, limit]);

    const pagesArray = useMemo(() => {
        return Array.from({length: totalPages}, (_, index) => (index + 1))
    }, [totalPages])

    const setNewGood = (good) => {
        setGoodsCart([...goodsCart, {...good, CartId: Date.now(), quantity: 1}])
    }

    const createNewGood = (good) => {
        setGoods([...goods, good])
    }

    const removeCartGood = (good) => {
        setGoodsCart(goodsCart.filter(g => g.CartId !== good.CartId))
    }

    const sortGoods = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="GoodsApp">
            <GoodBar
                search={searchQuery}
                setSearch={setSearchQuery}
                create={createNewGood}
                remove={removeCartGood}
                setGoodsCart={setGoodsCart}
                goodsCart={goodsCart}
            />
            <GoodsFilter
                sortGoods={sortGoods}
                limit={limit}
                selectedSort={selectedSort}
                setLimit={setLimit}
            />
            {errorPost
                && <div className='loader__posts'>Ошибка {errorPost}</div>
            }
            {isLoading
                ? <div className='loader__posts'><MyLoader/></div>
                : <GoodsList
                    setGood={setNewGood}
                    goods={searchedAndSortedGoods}
                />
            }
            <Pagination
                pagesArray={pagesArray}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}

export default Goods;
