import { useState } from 'react';
const Calc = () => {
    const [value, setValue] = useState('')
    return (
        <form>
            <input className='w-full px-5 py-5 my-5 text-3xl font-normal text-end font-Poppins' type="text" value={value} />
            <div className="grid grid-cols-4 gap-5 px-5">
                <input className='function' type="button" value="AC" onClick={() => setValue('')} />
                <input className='function' type="button" value="de" onClick={() => setValue(value.slice(0, -1))} />
                <input className='function' type="button" value="%" onClick={e => setValue(value + e.target.value)} />
                <input className='oprator' type="button" value="/" onClick={e => setValue(value + e.target.value)} />
                <input className='number' type="button" value="7" onClick={e => setValue(value + e.target.value)} />
                <input className='number' type="button" value="8" onClick={e => setValue(value + e.target.value)} />
                <input className='number' type="button" value="9" onClick={e => setValue(value + e.target.value)} />
                <input className='oprator' type="button" value="*" onClick={e => setValue(e.target.value)} />
                <input className='number' type="button" value="4" onClick={e => setValue(value + e.target.value)} />
                <input className='number' type="button" value="5" onClick={e => setValue(value + e.target.value)} />
                <input className='number' type="button" value="6" onClick={e => setValue(value + e.target.value)} />
                <input className='oprator' type="button" value="-" onClick={e => setValue(e.target.value)} />
                <input className='number' type="button" value="1" onClick={e => setValue(value + e.target.value)} />
                <input className='number' type="button" value="2" onClick={e => setValue(value + e.target.value)} />
                <input className='number' type="button" value="3" onClick={e => setValue(value + e.target.value)} />
                <input className='oprator' type="button" value="+" onClick={e => setValue(e.target.value)} />
                <input className='number' type="button" value="0" onClick={e => setValue(value + e.target.value)} />
                <input className='number' type="button" value="." onClick={e => setValue(value + e.target.value)} />
                <input className='w-full col-span-2 oprator' type="button" value="=" onClick={() => setValue(eval(value))} />
            </div>
        </form>
    );
};
export default Calc