"use client"
import Cta from '@/components/CTA/Cta'
import './Stats.css'
  

  export default function Stats({stats, heading, para}) {
    return (
      <div className="bg-white app__stats py-24 sm:py-32 flex items-center flex-col gap-y-12">
      <Cta heading={heading} para={para}/>
      </div>
    )
  }