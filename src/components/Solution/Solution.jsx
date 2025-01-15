import React, { useEffect, useState } from 'react'
import asset from '../../assets/asset';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Solution = ({data}) => {
  if (!data) {
    return <p className='text-red-500 font-semibold'>No data provided for this solution.</p>;
  }

  // Display Top part first
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);   

  const [selectLanguage,setSelectLanguage] = useState('cpp')
  const hasSolution = data?.solution
  const selectedCode = hasSolution ? data.solution.code[selectLanguage] : null

  const languages = ['cpp', 'python', 'java'];


  // Copy button
  const handleCopyButton = () => {
    console.log(selectedCode);
    
    if(selectedCode){
        navigator.clipboard.writeText(selectedCode)
        .then(() => {
            toast.success('Code copied to clipboard')
        })
        .catch((err) => {
            console.log("Error",err);
            toast.error('Failed to copy')
        })
    }
  }

  return (
    <div>
        <h2 className='text-xl font-medium mb-2'><b>Question:</b> {data.name}</h2>
        {hasSolution ?
            <p className='text-gray-600 text-base leading-relaxed'>{data.solution.description}</p>
            :
            <p className='text-gray-600 text-base'>No solution available</p>
        }

        {/* If solution have */}
        <div className='mt-10 rounded-lg'>
            {hasSolution && (
                <div className='mb-4 flex gap-2'>
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            className={`px-3 py-2 text-sm rounded-md font-medium transition-colors duration-200 ${
                                selectLanguage === lang ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all duration-150' 
                            } `}
                            onClick={() => setSelectLanguage(lang)}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}

            {/* If code have */}
            {selectedCode ? (
                <div className='relative'>
                    {/* Copy button */}
                    <button className='absolute top-5 right-5' onClick={handleCopyButton}>
                        <img src={asset.copy} alt="copy" className='w-5 h-5 md:w-7 md:h-7 hover:scale-90 duration-150 transition-all' />
                    </button>
                    <pre 
                        className='bg-gray-900 text-white rounded-lg overflow-auto leading-none'
                        style={{
                            margin: 0,
                            fontFamily: "'Fira Code', monospace",
                            fontSize: "0.975rem",
                            lineHeight: "1.5",
                        }}
                    >
                        <code>{selectedCode}</code>
                    </pre>
                </div>
            ) : hasSolution? (
                <p className='text-gray-600'>No solution available in {selectLanguage}</p>
            ) : null}
        </div>

        {/* Add toast */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  )
}

export default Solution