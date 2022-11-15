import { Carousel } from '@mantine/carousel';
const { Slide } = Carousel
import '../../../public/CSS/Carousel1.css'
import ImageWrapper from './ImageWrapper';

const path1 = '/public/images/imgs2/kittenFrostyBoy1.jpg'
const path2 = '/images/imgs2/kittenFrostyBoy2.jpg'
const path3 = '/images/imgs2/kittenFrostyGirl1.jpg'

const arrayPaths: [string, string, string] = [path1, path2, path3]

const cardWidth = 320

function Carousel1() {
  return (
    <>
      <Carousel
      sx={{ maxWidth: cardWidth }}
      mx="auto"
      loop
      align='center'
      withIndicators
      controlSize={40}
      controlsOffset='xs'
      includeGapInSize={false}
      height={cardWidth}
      nextControlLabel="Navigational Arrow for Image Carousel"
      speed={5}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
          // backgroundColor: 'rgba(0,0,0,0)',
        },
        root: {
          backgroundColor: 'red',
          padding: 10,
        },
        controls: {
          // transform: 'translateY(200%)',
          position: 'relative'
        },
        viewport: {
          margin: 10,
        }
      }}
      >

        <>
          {arrayPaths.map((img, idx) => (
            <Slide >
                <ImageWrapper src={img} width={cardWidth} ></ImageWrapper>
                {img}
            </Slide>
          ))}
        </>
      </Carousel>
      <div style={{margin: '4rem'}}></div>
    </>
  );
}
export default Carousel1
