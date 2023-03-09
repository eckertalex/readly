import { useEffect, useRef, useState } from 'react'
import Epub, { Book, Rendition } from 'epubjs'

type EpubReaderProps = {
  urlOrData: string | ArrayBuffer
}

export function EpubReader(props: EpubReaderProps) {
  const { urlOrData } = props
  const [isLoading, setIsLoading] = useState(true)
  const viewerRef = useRef<HTMLDivElement>(null)
  const bookRef = useRef<Book | null>(null)
  const renditionRef = useRef<Rendition | null>(null)

  useEffect(() => {
    initBook()

    return () => {
      if (bookRef.current) {
        bookRef.current.destroy()
      }
      bookRef.current = null
      renditionRef.current = null
    }
  }, [urlOrData])

  const initBook = () => {
    if (bookRef.current) {
      bookRef.current.destroy()
    }

    bookRef.current = Epub(urlOrData)
    bookRef.current.loaded.navigation.then(() => {
      setIsLoading(false)
      initReader()
    })
  }

  const initReader = () => {
    if (!viewerRef.current || !bookRef.current) return

    renditionRef.current = bookRef.current.renderTo(viewerRef.current, {
      width: '100%',
      height: '100%',
    })

    renditionRef.current.display()
  }

  return (
    <div className="relative w-full h-full">
      {isLoading ? <>Loading...</> : <div className="h-full" ref={viewerRef} />}
    </div>
  )
}
