export const dynamic = 'force-dynamic'

// internal dependencies
import HomepageLayout from "@/layouts/Homepage/Homepage"
import { getHomepageData } from "@/lib/sanity/homepage"

export async function generateMetadata() {
  return {
    title: 'Micaelen Miranda | Software Developer',
    description: ''
  }
}

export default async function Home() {
  const homepageData = await getHomepageData()

  return (
    <HomepageLayout data={homepageData} />
  )
}
