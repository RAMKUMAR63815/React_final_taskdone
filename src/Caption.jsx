import React, { useRef, useState } from 'react'
import "./Caption.css"

export default function Caption() {
    const [product,setproduct] = useState(true)
    const [imgurl,setimgurl] = useState("")
    const imgRef = useRef(0)

    const handleclick = (e)=>{

        const file= e.target.files[0]
        if (file){
            const preview = URL.createObjectURL(file)
            setimgurl(preview)
            setproduct(false)
        }
    }
    const [count,setcount] = useState(0);
    // const click = ()=>{
    //     setcount(count +1)
    // }
    const[liked,setliked] = useState(false)
     const handleLike = () => {
    if (liked) {
      setcount(count - 1);
    } else {
      setcount(count + 1);
    }

    setliked(!liked);
  };
  const [comment,setcomment]=useState("")
  const [comments,setcomments] = useState([])
  const handle =()=>{
    if (comment.trim()!=="")
    {
        setcomments([...comments,comment])
        setcomment("")

    }
  }

  return (
    < div className='main' > 
    <div className='card'>
        <div >
        <h1>Profile Card</h1>
    <div>
        <div>{product ? (<div className='container1'>
            <p id='para'>No profile picture</p></div>):
            (<img className='org-img' src={imgurl}  />)}</div>
        <input type='file' ref={imgRef} accept='image/*' onChange={handleclick} hidden></input>
        <button className='btn1' onClick={()=>imgRef.current.click()}> Upload Image</button></div>
        <div className='div2'><button id='like1' className={`bt2 ${liked ?"active":""}`} onClick={handleLike}>❤️ Like</button> 
        <span id='span1'>{count} Likes</span>
        

        </div>
        <div className='input1'>
            <input className='in1' type='text' placeholder='write a command...' value={comment} onChange={(e)=>setcomment(e.target.value)}></input> <span><button className='in2' onClick={handle}>Comment</button></span>
            
         </div>
    </div>
          <div>
          <h3 id='com'>Comments</h3>
         <div className='text'>
            
                {comments.length === 0 ? (<p>No comments yet</p>) : (comments.map((value,id)=>(<div key={id} className='text'>{value}</div>)))}
            </div>
       </div>
        
       

    
    </div>
    
    
     </div>
  )
}
