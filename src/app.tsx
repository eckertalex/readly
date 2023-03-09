import { EpubReader } from './features/epub-reader'

export function App() {
  return (
    <main className='h-full w-full'>
      <EpubReader urlOrData={'/alice.epub'} />
    </main>
  )
}
