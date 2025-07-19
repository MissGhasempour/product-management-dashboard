import { useState } from "react"

export default function RightButton({res}) {
    const [newRes, setNewRes] = useState({});
    const showNextList = () => {
       
    }
    return <button onClick={showNextList} className="ml-4 text-2xl border border-blue-400 px-6 text-zinc-100  bg-blue-400 rounded-2xl">{">"}</button>
}