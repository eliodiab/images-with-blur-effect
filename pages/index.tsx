import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import photo from '../public/images/image.jpg'
// import photo2 from '../public/images/image2.jpg'
// import photo3 from '../public/images/image3.jpg'
import NextImage from '../components/NextImage'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Image optimization with blur effect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mt-4 mb-8 w-2/4 text-center">
        <h1 className="text-xl font-bold">
          Lazy loading images using Next.js Image component and TailwindCss for
          the blur effect
        </h1>
      </header>
      {/* <img src="https://links.papareact.com/d7l" /> */}

      {/* <Image src="https://links.papareact.com/d7l" height={1080} width={1920}/> */}
      {/* If we don't know the height and width we can use layout fill but needs a parent container
      with position relative
      using the attribute priority will request the image before any other image
      */}
      <div className="flex w-full flex-wrap">
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/9QCoFjDFp-A"
            priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/gN0yrOzZMDc"

            // priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/RcmtTYRlVPg"

            // priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/MXUxWrC_Pe0"

            // priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/WOYz4cghgOE"

            // priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/G6OmGkAnN2U"

            // priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/qQk6ioeLBMc"

            // priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/VNT4qAZMWvo"

            // priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
        <div className="relative mb-4 w-2/4 pt-[50%]">
          <NextImage
            src="https://source.unsplash.com/FUkVrzJY5A0"

            // priority
            // placeholder="blur"
            // blurDataURL={photo2}
          />
        </div>
      </div>

      {/* <Image src={photo}/>   */}
    </div>
  )
}

export default Home
