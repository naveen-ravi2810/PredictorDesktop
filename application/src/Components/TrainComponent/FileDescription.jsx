import React, { useEffect, useState } from 'react'
import Papa from 'papaparse';

export const FileDescription = ({InputFileType}) => {
    const [CsvData, setCsvData] = useState([])
    const [TotalFileSize, setTotalFileSize] = useState(0)
    const [HeaderKeys, setHeaderKeys] = useState([])
    useEffect(()=>{
        // Displaying Few Datas of the file
        if(InputFileType.type == 'text/csv'){
            Papa.parse(InputFileType, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                preview: 10, // Limit to the first 10 rows
                complete: (result) => {
                  setCsvData(result.data);
                //   setError(null);
                const totalSize = result.data.reduce((total, row) => {
                    const rowSize = JSON.stringify(row).length; // Convert row to JSON and get its length in bytes
                    return total + rowSize;
                  }, 0);
                  setTotalFileSize(totalSize);
                  if (result.data.length > 0) {
                      setHeaderKeys(Object.keys(result.data[0]));
                    }
                },
                // error: (err) => {
                //   setError(err.message);
                // },
              });
       


        }
    },[InputFileType])
  return (
    <div id="FIleDetails" className='h-full w-full flex flex-col'>
        {/* Discribing File Data */}
        <h1 className='text-xl font-bold uppercase text-orange-500 underline'>File Details</h1>
        <br />
        <div>
            File Name : {InputFileType.name}    
        </div>            
        <div>
            File Size : {InputFileType.size/1024/1024} Mb
        </div>
        <div>
            File Type : {InputFileType.type}
        </div>
        <div>
            File Length : {TotalFileSize}
        </div>
        <br />
        {/* Displaying Sample data of count 10 */}
        <div className='overflow-x-auto flex-1' id="demoData">
        <h2 className='text-xl font-bold uppercase text-orange-500 underline'>CSV Data</h2> <br />
        <table className='w-fit'> 
          <thead>
            <tr>
              {CsvData.length > 0 &&
                Object.keys(CsvData[0]).map((header, index) => (
                  <th className='border-yellow-500 border-2' key={index}>{header}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {CsvData.map((data, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(data).map((value, columnIndex) => (
                  <td className='border-yellow-300 border-2' key={columnIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <h1 className='text-2xl'>Data Preprocessing </h1>
       <hr />

    <DataPreprocessingForm HeaderKeys={HeaderKeys} InputFileType={InputFileType}/>
     
    </div>
  )
}
import axios from 'axios';
// Data Preprocessing Component
export const DataPreprocessingForm = ({HeaderKeys, InputFileType}) => {
  const [PreprocessingDetails, setPreprocessingDetails] = useState({})
  function updatePreprocessingDetails(e){
    setPreprocessingDetails({
      ...PreprocessingDetails,
      [e.target.name] : e.target.value
    })
  }
    async function funDataPreprocessing(e){
        e.preventDefault()
        let formDetails = new FormData()
        formDetails.append("file", InputFileType)
        for (var key in PreprocessingDetails){
          formDetails.append(key, PreprocessingDetails[key])
        }
        const response = await axios.post('/localapi/datapreprocessing', formDetails)
        console.log(response)
      }
    return(
        <form id="options" onSubmit={funDataPreprocessing}>
        <br />
            {/* Requesting for NaN Values */}
            <h1 className='text-xl font-bold uppercase text-orange-500 underline flex'> Missing Value Approach</h1>
            <br />
                <select name="misingValue" id="" onChange={updatePreprocessingDetails} required>
                    <option value="" >Select</option>
                    <option value="mean/median">Mean/Median</option>
                    <option value="removerow">Remove Row</option>
                </select>
            <br />
            {/* Requesting a Encoding Technique */}
            <br />
            <h1 className='text-xl font-bold uppercase text-orange-500 underline'> Select Encoding Technique</h1>
            <br />
            <select name='encodingtonumbers' id='' onChange={updatePreprocessingDetails} required>
              <option value="" >Select</option>
              <option value="onehotencoding">One Hot Encoding</option>
              <option value="labelencoding">Label Encoding</option>
            </select>
            <br />
            {/* Requesting A output column for Co-relation and Prediction */}
            <br />
            <h1 className='text-xl font-bold uppercase text-orange-500 underline'> Select Output Column</h1>
            <br />
            <select name="outputcolumn" id="" onChange={updatePreprocessingDetails} required>
              <option value="">Select</option>
            {HeaderKeys.map((Header, index)=>{
                return(
                    <option value={Header} key={index}>{Header}</option>
                )
            })}
            </select> 
            <br /> <br />
            <button type='submit'>Complete Data Preprocessing</button>
      </form>
    )
}