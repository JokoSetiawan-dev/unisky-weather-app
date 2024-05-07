import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import locationIcon from "../../../public/location-icon.svg"
import { Ghost } from 'lucide-react'

export default function Search() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className='p-0' variant="ghost">
           <Image className='w-[25px] h-auto' src={locationIcon} alt='search icon'/>
          </Button>
        </DialogTrigger>
        <DialogContent className='m max-w-[330px] rounded-3xl'>
          <DialogHeader className='text-left'>
            <DialogTitle className='text-sm'>Choose Location</DialogTitle>
            <DialogDescription className='text-[10px]'>Choose the Locations You Want to See</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
