import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => { //принимает посты и метод сортировки

    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => { //принимает посты, метод сортировки и поиксовую строку
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}