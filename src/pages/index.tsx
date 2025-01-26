// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Gallery from './components/gallery'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
export default function Home() {
  return (
    <div>
    <List />
    <RecipeList />
    <Gallery />
    </div>
  )
}
