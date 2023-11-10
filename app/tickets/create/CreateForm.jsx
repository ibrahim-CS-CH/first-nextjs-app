"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'


export default function CreateForm() {
    const router = useRouter();

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [priority, setPriority] = useState("low")
    const [isLoading, setIsLaoding] = useState(false);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLaoding(true);
        const ticket = {
            title, body, priority, user_mail: "ibrahim@asd.com"
        }
        const res = await fetch("http://localhost:4000/tickets", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(ticket)
        })        
        if(res.status === 201) {
            router.refresh(); 
            router.push("/tickets")
        }
    }
  return (
    <form className="w-1/2" >
        <label htmlFor="title">
            <span>title:</span>
            <input 
                required
                name="title"
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
            />
        </label>
        <label htmlFor="body">
            <span>body:</span>
            <textarea 
                required
                name="body" 
                id="body"
                onChange={(e)=>setBody(e.target.value)}
                value={body}
            />
        </label>
        <label htmlFor="priority">
            <span>priority</span>
            <select 
                onChange={(e)=>setPriority(e.target.value)}
                value={priority}
                name="priority" 
                id="priority"
            >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
        </label>
        <button className="btn-primary " disabled={isLoading} onClick={handleSubmit}>
            {isLoading && <span>adding...</span>}
            {!isLoading && <span>add ticket</span>}
        </button>
    </form>
  )
}
