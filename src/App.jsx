import { useEffect } from 'react'
import Select from 'react-select'
import { getLanguages } from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {


  const dispatch = useDispatch();
  
useEffect(()=> {
  dispatch(getLanguages());
}, []);
  return (
  <div className="bg-zinc-900 h-screen grid place-items-center text-white">
   <div className='w-[80vw] max-w-[1100px] flex flex-col justify-center'>
    <h1 className="text-center mb-7 text-4xl  font-semibold">Çeviri +</h1>
    {/* üst kısım */}
    <div className='flex gap-2'>
    <Select className='flex-1'/>
    <button className='bg-zinc-700 px-6 py-2 rounded hover:ring-2 hover:bg-zinc-800'>Değiş</button>
    <Select className='flex-1'/>
    </div>

{/* text alanları */}

<div className='flex mt-5 gap-3 md:gap-[105px] max-md:flex-col '>
  <div className='flex-1'>
    <textarea className='w-full min-h-[300px] max-h-[500px] text-black p-[10px] text-[20px] rounded '></textarea>
  </div>
  <div className='flex-1'>
    <textarea disabled className='w-full min-h-[300px] max-h-[500px] text-black p-[10px] text-[20px] rounded '></textarea>
  </div>
</div>

<button className='bg-zinc-700 mt-3 py-3 text-[17px] rounded hover:ring-2 hover:bg-zinc-900 transition'>Çevir</button>

   </div>
 
  </div>
  )
}

export default App
