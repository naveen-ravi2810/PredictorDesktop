import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Models = () => {
  const [PreprocessedDatasets, setPreprocessedDatasets] = useState([])

  async function FetchPreprocessedDataset(){
    try{
      const response = await axios.get('/localapi/Models')
      setPreprocessedDatasets(response.data.Models)
    } catch {
      console.log("Backend Error")
    }
  }


  useEffect(()=>{
    FetchPreprocessedDataset()
  },[])
  return (
    <div className='h-full w-full overflow-y-auto py-5 px-3'>
      <h1 className='text-2xl'>Models</h1> <br />
      <div>
        <h1 className='flex items-baseline text-2xl gap-3'>Preprocessed Data <span className='text-sm'> csv format</span></h1> <hr />
        <br />
        <table>
          <thead>
            <tr>
              <th className='border-yellow-300 border-2'>ID</th>
              <th className='border-yellow-300 border-2'>Name</th>
              <th className='border-yellow-300 border-2'>Description</th>
              <th className='border-yellow-300 border-2'>Data Preprocessed</th>
              <th className='border-yellow-300 border-2'>Output Column</th>
            </tr>
          </thead>
          <tbody>
            {
              PreprocessedDatasets.map((Model,index)=>(
                <tr key={index} className=''>
                  <td className='border-yellow-300 border-2 px-1'>{Model['id'].substring(0,10)}...</td>
                  <td className='border-yellow-300 border-2 px-1'>{Model.name}</td>
                  <td className='border-yellow-300 border-2 px-1'>{Model['description'].substring(0,16)}...</td>
                  <td className='border-yellow-300 border-2 px-1'>{Model.Datetime}</td>
                  <td className='border-yellow-300 border-2 px-1'>{Model.outputcolumn}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
