import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'
import { formatDateToEnGB } from '@/utils/helpers/string'

// NOTE CONTENT
export const getNoteData = async (slug: string) => {
    const note = await client.fetch(
        `*[_type == "${schemas.notes}" && slug.current == '${slug}'][0]`
    )

    const formatedNote = {
        title: note.title,
        slug: note.slug,
        image: note.thumbnail,
        updatedAt: formatDateToEnGB(note._updatedAt),
        excerpt: note.excerpt,
        content: note.content,
        topics: note.topics
    }

    return formatedNote
}

// SEO
export const getSeo = async () => {
    /* const notesSeo = client.fetch(
        `*[_type=="${schemas.}"][0]`
    ) */

    // return notesSeo
}