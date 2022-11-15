type pageProps = {
  src: string,
  width: number,
  alternative?: string,
}

function ImageWrapper({src: src, width, alternative = 'placeholder'}: pageProps) {
  console.log('source:: ', src);
  return (
    <div className='carousel-img-wrapper' style={{width: width, height: 'auto'}}>
      <img style={{height: 'auto', width: '100%', objectFit: 'cover'}} className='carousel-img' src={src} alt={alternative} />
    </div>
  )
}

export default ImageWrapper
