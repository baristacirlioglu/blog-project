import React from 'react'
import Link from 'next/link'
import { Button } from '../../button'
import { Facebook, Instagram, Linkedin} from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-myprimarycolor text-white py-6'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='text-center md:text-left space-y-4'>
            <Link href='/' className='text-2xl text-white font-bold'>
                Logo
            </Link>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deleniti?</p>
        </div>
            <nav className='md:mt-0 mt-8 space-x-4'>
                <Link href="/" className='text-white font-bold hover:underline'>
                    Home
                </Link>
                <Link href="/about" className='text-white font-bold hover:underline'>
                    About
                </Link>
                <Link href="/blog" className='text-white font-bold hover:underline'>
                    Blog
                </Link>
                <Link href="/contact" className='text-white font-bold hover:underline'>
                    Contact
                </Link>
            </nav>

            <div className='md:mt-0 mt-8 space-x-4'>
                <Button variant="secondary" size={'icon'}>
                    <Facebook/>
                </Button>
                <Button variant="secondary" size={'icon'}>
                    <Instagram/>
                </Button>
                <Button variant="secondary" size={'icon'}>
                    <Linkedin/>
                </Button>
            </div>

        </div>

    </div>
  )
}

export default Footer