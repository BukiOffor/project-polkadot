'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/UP.svg'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  const goToHome = () => { router.push('/') }
  return (
    <>
      <Link onClick={goToHome} href="/">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50} priority />
      </Link>
    </>
  )
}

export default Logo