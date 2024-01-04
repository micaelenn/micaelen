import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'


// TIL - PAGE CONTENT
export const getTodayILearnedPage = async () => {
    const posts = await getTodayILearnedPosts()
    
    const data = await client.fetch(
        `*[_type == "${schemas.tilPage}"][0]`
    )

    const pageData = {
        seo: data.seo,
        content: {
            introduction: data.content,
            posts: posts
        }
    }

    return pageData
}

// TIL - POSTS
export const getTodayILearnedPosts = async () => {
    const posts = await client.fetch(
        `*[_type=="tilSchema"] {
            seo,
            title,
            slug,
            subject,
            content,
            _createdAt
        }`
    )

    return posts
}