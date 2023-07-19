import { Grid } from '@chakra-ui/react'

interface CenterContentProps {
  children: React.ReactNode
}
const CenterContent = ({ children }: CenterContentProps) => {
  return (
    <>
      <Grid className=' py-10 mx-auto w-[95%] md:w-[90%] lg:w-[80%] place-items-center text-center'>
        {children}
      </Grid>
    </>
  )
}

export default CenterContent