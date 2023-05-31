import React, {useState} from 'react'
export default function TextArea(props) {
    const [text, setText] = useState("")
    const [isActive, setIsActive] = useState(false)
    const handleUppercase = () =>{
        let newText = text.toUpperCase()
        setText(newText)
       
    }
    const handleLowercase = () =>{
        let newText = text.toLowerCase()
        setText(newText)
       
    }
    const handleClearText = () =>{

        setText("")
       
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
  const handleDarkMode = () => {
    setIsActive(!isActive)
  };
  return (
    <div className={`flex justify-center items-center duration-300 ${isActive ? 'bg-[#222] text-white' : ''}`}>
    <div className='flex justify-center flex-col w-96'>
        <div className='text-3xl'>{props.heading}</div>
        <textarea onChange={handleOnChange} className='border border-blue-300 m-2' name="" id="" cols="80" rows="10" value={text}></textarea>
        <button onClick={handleUppercase} className='border p-2 border-blue-300 rounded-lg m-2'>Convert to Uppercase</button>
        <button onClick={handleLowercase} className='m-2 border p-2 border-blue-300 rounded-lg'>Convert to Lowercase</button>
        <button onClick={handleClearText} className='m-2 border p-2 border-blue-300 rounded-lg'>Clear Text</button>
        <div className='my-5 space-y-1'>
            <div className="text-3xl">Your Text Summary</div>
            <br />
            <div>{text===""? text.split(" ").length-1 : text.split(" ").length} words and {text.length} characters</div>
            <div>{text.split(" ").length * 0.008} Minutes taken to read</div>
            <div className='text-3xl'>Preview</div>
            <div>{text}</div>
        </div>
        <button onClick={handleDarkMode} className='m-2 border p-2 border-blue-300 rounded-lg'>Enable Dark Mode </button>
    </div>

    </div>
  )
}
