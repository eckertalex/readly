import { useEpub } from './use-epub'
// import { TopBar } from './top-bar'
// import { Pagination } from './pagination'
// import { Modals } from '../modals/modals'
// import { useCallback } from 'react'

type EpubReaderProps = {
  urlOrData: ArrayBuffer | string
}

export function EpubReader(props: EpubReaderProps) {
  const { urlOrData } = props
  const [viewerRef, { isLoading,
    // renditionRef
  }] = useEpub({ urlOrData })

  // const updateFontSize = useCallback((size: string) => renditionRef.current?.themes.fontSize(size), [renditionRef])
  // const prev = useCallback(() => renditionRef.current?.prev(), [renditionRef])
  // const next = useCallback(() => renditionRef.current?.next(), [renditionRef])
  // const onLocationChange = useCallback((location?: string) => renditionRef.current?.display(location), [renditionRef])

  return (
    <div className='h-full w-full flex flex-col relative'>
      {/* <TopBar updateFontSize={updateFontSize} isLoading={isLoading} /> */}
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className='h-full w-full flex flex-1' ref={viewerRef} />
      )}
      {/* <Pagination prev={prev} next={next} isLoading={isLoading} /> */}
      {/* <Modals onLocationChange={onLocationChange} /> */}
    </div>
  )
}
