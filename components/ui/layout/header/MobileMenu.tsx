import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'


const MobileMenu = () => {
  return (
    <Sheet>
  <SheetTrigger asChild>
    <Button variant="secondary" className='md:hidden'>
      <Menu/>
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='mb-8'>
        <Link href='/' className='text-2xl text-black font-bold'>
                Logo
            </Link>
      </SheetTitle>
      <nav className='flex flex-col items-start space-y-4'>
                <Link href="/" className='text-black font-bold hover:underline'>
                    Home
                </Link>
                <Link href="/about" className='text-black font-bold hover:underline'>
                    About
                </Link>
                <Link href="/blog" className='text-black font-bold hover:underline'>
                    Blog
                </Link>
                <Link href="/contact" className='text-black font-bold hover:underline'>
                    Contact
                </Link>
            </nav>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default MobileMenu