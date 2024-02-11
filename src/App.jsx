import './App.css'
import Calculator from './components/Calc'

function App() {

  return (
    <div className='flex items-center justify-center w-full min-h-screen bg-[#EFE8DE]'>
      <div className='container max-w-[377px] px-3 mx-auto bg-white p-10 rounded-3xl'>
        <Calculator />
      </div>
    </div>
  )
}

export default App
