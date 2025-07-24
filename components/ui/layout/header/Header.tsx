import Link from 'next/link'
import React from 'react'
import { Button } from '../../button'
import { Menu, Search, User } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { ModeToggle } from '@/components/ModeToggle'

const Header = () => {
  return (
    <div className='bg-my-primary shadow-sm top-0'>
        <div className='container mx-auto flex items-center justify-between px-4 py-3'>
            <Link href='/' className='text-2xl text-white font-bold'>
                Logo
            </Link>

            <nav className='hidden md:flex space-x-6'>
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

            <div className='flex items-center space-x-2'>
                <Button variant="secondary">
                    <Search/>
                </Button>
                <Link href="/login">
                    <Button variant="secondary">
                        <User/>
                    </Button>
                </Link>
                <ModeToggle/>
                <MobileMenu/>
            </div>

            </div>

        </div>
  )
}

export default Header