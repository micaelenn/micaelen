import { client } from '@/utils/config/client'
import { schemas, revalidate } from '@/utils/config/schemas'

// HOMEPAGE CONTENT
export const getHomepageData = async () => {
    const data = await client.fetch(
        `*[_type=="${schemas.homepage}"][0]`, 
        { next: { revalidate } }
    )

    const content = {
        introduction : {
            image: data.image,
            title: data.title,
            description: data.description   
        }
    }

    return content
}