// external dependencies
import { getNoteData } from '@/lib/sanity/note'
import NoteLayout from '@/layouts/Note/Note'

export async function generateMetadata() {
  // const seo = await getSeo()
  
  return {
    title: 'note',
    description: 'Teste',
  }
}

export default async function Note({ params }: { params: { slug: string } }) {
  const noteData = await getNoteData(params.slug)
  return <NoteLayout data={noteData} />
}
