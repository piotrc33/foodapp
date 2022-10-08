import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

import Navbar from '../components/Navbar'


// nazwa : typ
const Index: NextPage = () => {
  return (
    <Layout>
       <div className='main'>
        We have ... recipes on our website
        You should try something new!
      </div>
    </Layout>
)}

export default Index
