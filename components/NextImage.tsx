import Image from 'next/image'
import * as React from 'react'

interface ImageProps {
  src: string
  priority?: boolean
}

const { useState } = React

const NextImage: React.FC<ImageProps> = ({ src, priority }) => {
  const [isReady, setIsReady] = useState(false)

  const onLoadCallback = () => {
    setIsReady(true)
  }

  return (
    <Image
      objectFit="cover"
      src={src}
      className={`bg-gray-400 transition duration-1000 ${
        isReady ? 'scale-100 bg-gray-400 blur-0' : 'scale-120 blur-2xl'
      }`}
      priority={priority}
      onLoadingComplete={onLoadCallback}
      layout="fill"
    />
  )
}

export default NextImage
