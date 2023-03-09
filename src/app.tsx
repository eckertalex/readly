import { EpubReader } from './features/epub-reader'

export function App() {
  return (
    <main className="w-full h-full">
      <EpubReader urlOrData={'/alice.epub'} />
    </main>
  )
}
