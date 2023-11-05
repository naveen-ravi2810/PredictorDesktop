import React, { useState } from 'react'
import { FileDescription } from "./../Components/TrainComponent";
import { AiOutlineReload } from './../Requires'
export const Train = () => {
  const [File, setFile] = useState(null)
  const [InputFileType, setInputFileType] = useState('')
  const [FileDescriptionContent, setFileDescriptionContent] = useState(false)
  const [FileCannotAccept, setFileCannotAccept] = useState(false)
  const [FileAdded, setFileAdded] = useState(false)
  function getFileInfo(event){
    event.preventDefault()
    setInputFileType(File)
    if(File.type == 'text/csv' || File.type == 'application/json' || File.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
      setFileDescriptionContent(true)
      setFileCannotAccept(false)
      setFileAdded(true)
    } else {
      setFileDescriptionContent(false)
      setFileCannotAccept(true)
    }
  }
  function Refresh(){
    document.location.reload()
  }
  return (
    <div className='h-full w-full overflow-y-auto py-5 px-3'>
        <h1 className='text-4xl flex  items-center gap-3'>Trainer <button onClick={()=>Refresh()}><AiOutlineReload/></button><span className='text-sm'>ℹ️</span> </h1> 
        <br />
        <div id="Trainarea">
          <h1 className='text-2xl'>File Loader</h1>
        <hr />
        <br />
          <form onSubmit={getFileInfo}  className={`${FileAdded ? 'bg-gray-300':'none'} p-2`}>
            <h1 className='text-xl font-bold uppercase text-orange-500 underline'>Upload File</h1>
            <br />
            <input type="file" disabled={FileAdded} onChange={(e)=>setFile(e.target.files[0])} required/>
            <br /> <br />
            <button className='border-2 border-orange-400 p-1 rounded' type="submit" disabled={FileAdded} >Procced File</button>
          </form>
          <br />
          {FileDescriptionContent && <FileDescription InputFileType={InputFileType}/>}
          {FileCannotAccept && <><p>File Cannot be accepted</p></>}
        </div>
    </div>
  )
}