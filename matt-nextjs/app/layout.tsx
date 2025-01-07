import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { AuthProvider } from "@/components/auth-provider";

import TopNavbar from '@/components/navigation/TopNavbar'

import SideBar from '@/components/navigation/SideBar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/session';
import { ModalProvider } from '@/components/providers/verlof/modal-provider';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ATMATT',
  description: '',
  icons: {icon: ['/favicon.ico']},
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getCurrentUser();
 
  return (
    <html lang="en">

      <body>
        <main >
        <TopNavbar session={session}/>
        <SideBar  session={session}/>
        <ModalProvider />
        <div style={{marginLeft: ""}} className=' mt-10 mb-20'>
        <AuthProvider children={children}/>
        </div>
        <Footer/>
        </main>
      </body>
    </html>
  )
}
