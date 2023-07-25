'use client';
import ProfileNavbar from '@/components/ProfileNavbar'
import { Grid, GridItem } from '@chakra-ui/react';

interface ProfileRootLayoutProps {
  children: React.ReactNode
}

const ProfileRootLayout = ({ children }: ProfileRootLayoutProps) => {
  return (
    <>
      <Grid gridTemplateColumns='repeat(6,1fr)'>
        <GridItem maxH={{
          base: 'auto',
          md: '100vh'
        }} colSpan={{
          base: 6,
          lg: 2,
          xl: 1
        }} bg='gray.200' >
          <ProfileNavbar />
        </GridItem>
        <GridItem h='100vh' overflowY='auto' colSpan={{
          base: 6,
          lg: 4,
          xl: 5
        }} px='2rem' pt='6rem' pb='3rem' >
          {children}
        </GridItem>
      </Grid>
    </>
  )
}

export default ProfileRootLayout