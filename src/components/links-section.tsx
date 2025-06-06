"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LinkSection = () => {
  return (
    <div className="w-full flex">
        <div className="grid grid-rows-3 md:grid-cols-3 w-full pl-[48px] pr-[48px] pt-12 ">
            <div className="flex justify-center items-center h-[48px]  mb-12">
                <Link href="https://youtube.com/@MB.mueblesyobjetos" target="_blank" rel="noopener noreferrer">
                    <Image
                        width={44}
                        height={44}
                        alt={"Youtube"}
                        src={"/images/yt-icon.png"}
                        className='border-diablo border-2'
                    />
                </Link>
            </div>
            <div className="flex justify-center items-center h-[48px] mb-12">
                <Link href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fmb.mueblesyobjetos%2F&sa=D&sntz=1&usg=AOvVaw2pOuCCieNLqulJRN2AALvh" target="_blank" rel="noopener noreferrer">
                    <span
                        style={{
                            display: 'inline-block',
                            padding: 2,
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)'
                        }}
                        className=''
                    >
                        <Image
                            width={44}
                            height={44}
                            alt={"Instagram"}
                            src={"/images/ig-icon.png"}
                            style={{ borderRadius: '50%', background: '#fff' }}
                        />
                    </span>
                </Link>
            </div>
            <div className="flex justify-center items-center h-[48px]  mb-12">
                <Image
                    width={44}
                    height={44}
                    alt={"Youtube"}
                    src={"/images/url-icon.png"}
                    style={{ borderRadius: '50%'}}
                    className='border-cloud border-2'

                />
            </div>
        </div>
    </div>
    
  )
}

export default LinkSection