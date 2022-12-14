// .tsx for component files, .ts for pure typescript files
import React, {FC} from "react";
import Navbar from "./Navbar";
// nextjs
import Image from 'next/image'
import Link from 'next/link'

// materialui
import { AppBar, Toolbar, Stack, Button } from '@mui/material'
import Head from "next/head";

interface Children {
  children: React.ReactNode
}

const Layout: FC<Children> = (props) => {
  return (
    <div className="container">
      <div className="content">
        <Head>
          <title>FOODAPP</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        <div className='main'>
          {props.children}
        </div>

      </div>
      
    </div>
  )
}

export default Layout;