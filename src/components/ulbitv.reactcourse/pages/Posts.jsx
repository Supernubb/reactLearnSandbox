import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../ui/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../api/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../ui/Pagination";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [showModal, setShowModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })
    const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts();
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setShowModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return <>
        <button onClick={() => setShowModal(!showModal)}>Добавить пост</button>
        {showModal &&
            <MyModal showModal={showModal} setShowModal={setShowModal}>
                <PostForm create={createPost} />
            </MyModal>
        }
        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>Произошла ошибка {postError}</h1>}
        {isPostsLoading
            ? <h1 className="flex items-center px-2">
                <svg className="animate-spin  -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Загрузка...
            </h1>
            : <PostList remove={removePost} posts={sortedSearchedPosts} title={`Посты про js`} />
        }
        <Pagination totalPages={totalPages} page={page} changePage={setPage} />
    </>
}