import './App.css'
import Calc from './components/Calc'

function App() {

  return (
    <div className='flex items-center justify-center w-full min-h-lvh bg-[#EFE8DE]'>
      <div className='container max-w-[377px] px-3 mx-auto bg-white p-10 rounded-3xl'>
        <Calc />
      </div>
    </div>
  )
}

export default App
