import React from 'react'
import MainTemplates from '../templetaes/MainTemplates'
import { FetchPromise } from '../components/FetchPromise'





const SeriesPage = () => {

const cos = FetchPromise('https://api.themoviedb.org/3/person/popular')

  return (
    <div>
        {cos === 0 ?"dssada":console.log(cos)}
    <MainTemplates>


      


    </MainTemplates>
    </div>
  )
}

export default SeriesPage