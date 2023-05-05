import { Dispatch, SetStateAction } from 'react'

interface props {
  index: number
  setPage: Dispatch<SetStateAction<number>>
}

export function Button({ index, setPage }: props) {
  return (
    <li>
      <button
        className='border bg-white w-10 text-center border-black p-2 rounded-lg relative after:rounded-lg after:top-2 after:left-2 after:right-[-8px] after:bottom-[-8px] after:-z-10 after:absolute after:bg-black hover:after:top-0 hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:translate-x-1 hover:translate-y-1 hover:after:bg-transparent cursor-pointer'
        onClick={() => setPage(index)}
      >
        {index + 1}
      </button>
    </li>
  )
}
