import GridLayout from '@/components/GridLayout'
import gridImg1 from '../../public/bgImg1.jpg'

const HomePage = () => {
  return (
    <>
      <GridLayout gridImg={gridImg1} gridOrder heading='New waves' title='Start watching' />
    </>
  )
}

export default HomePage