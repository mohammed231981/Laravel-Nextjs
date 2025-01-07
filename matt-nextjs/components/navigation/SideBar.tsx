"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { LogInIcon, LogOutIcon, User, UserRound, Calendar, HomeIcon } from 'lucide-react';
import ProfileMenu from '../ProfileMenu';

import { signOut } from "next-auth/react";
import { MegaMenu } from 'primereact/megamenu';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function SideBar({ show, setter, session }: any) {
    const router = useRouter();
    const MenuItem = ({ icon, name, route, classes }: any) => {

        return (
            <Link
                href={route}
                onClick={() => {

                }}
                className={`w-full  flex align-items-center p-2 ml-3 text-color hover:surface-200 border-noround ${classes}`}
            >
              {icon ? ( <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>) :''}
                <div>{name}</div>
            </Link>
        )
    }

    const navigateToHome = () => {
        router.push('/')
    }

    const items = [

        {
            template: () => {
                return (
                    <div className='flex'>
                        <Image
                            src="https://www.matt.nl/wp-content/uploads/matt-logo1.png"
                            alt="ATMATT"
                            width={180}
                            height={80}
                        />
                    </div>
                );
            },
        },
        { separator: true },
        {
            template: () => {
                return (
                    <button className={`w-full flex  text-color hover:surface-200 border-noround`} onClick={navigateToHome}> <HomeIcon className='mr-4' />Home</button>
                );

            }
        },
        {
            label: 'Profiel', icon: <User className='mr-4' />,
            items: [
                [
                    {
                        label: 'Profiel',
                        items: [
                            {
                                template: () => {
                                    return (
                                        <Link href='/login' className={`w-full  flex align-items-center p-2 ml-3 text-color hover:surface-200 border-noround ${session ? "hidden" : "relative"}`}>Inloggen</Link>

                                    );
                                }
                            },
                            {
                                template: () => {
                                    return (
                                        <Link href='/register' className={`w-full  flex align-items-center p-2 ml-3 text-color hover:surface-200 border-noround ${session ? "hidden" : "relative"}`}>Registreren</Link>
                                    );
                                }
                            },
                            {
                                template: () => {
                                    return (
                                        <button className={`w-full  flex align-items-center p-2 ml-3 text-color hover:surface-200 border-noround ${session ? "relative" : "hidden"}`} onClick={(e) => signOut()}>
                                            Uitloggen
                                        </button>
                                    );
                                },
                            },
                        ]
                    },
                ],

            ]
        },
        {
            label: 'Verlof', icon: <Calendar className='mr-4' />,
            items: [
                [
                    {
                        label: 'Verlof',
                        items: [
                            {
                                template: () => {
                                    return (
                                        <MenuItem route='/verlof/verlofkaart' name='Verlofkaart' />

                                    );
                                }
                            }
                        ]
                    },

                ]
            ]
        },
       
    ];
 

    return (
        <div className='xl:fixed max-xl:hidden h-full  top-0 left-0 z-[99999]'>
            <MegaMenu model={items} orientation="vertical" style={{ width: '16rem', height: '100%' }} />
        </div>
    )
}

