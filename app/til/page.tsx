export const dynamic = 'force-dynamic'

// internal dependencies
import TodayILearnedLayout from "@/layouts/TodayILearned/TodayILearned";
import { getTodayILearnedPage } from "@/lib/sanity/today-i-learned";

export async function generateMetadata() {
  const data = await getTodayILearnedPage()

  return {
    title: data.seo.title,
    description: data.seo.description
  }
}

export default async function TodayILearned() {
  const data = await getTodayILearnedPage()
  const content = data.content

  return (
    <TodayILearnedLayout {...content} />
  )
}