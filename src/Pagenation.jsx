import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Pagenation() {
    const [search,setsearch] = useSearchParams("page");
    const currentPage = Number(search.get("page")) ||1;
    const itemPerPage = 5;
    const allItem =Array.from({length : 20},(_,i)=>({
        id: i +1,
    }))

    const totalPage = Math.ceil(allItem.length/itemPerPage);
    const startindex = (currentPage -1) * itemPerPage;
    const endindex = startindex + itemPerPage;
    const currentitem =  allItem.slice(startindex,endindex);
    const gotopage = (PageNum)=>{
        if (PageNum =>1 && PageNum<= totalPage)
            setsearch({page:PageNum})
    }

    const prev = ()=>{
        if (currentPage>1){
            gotopage(currentPage-1)
        }
    }
       const next = ()=>{
        if (currentPage < totalPage){
            gotopage(currentPage+1)
        }
    }
  return (
    <div>
        <h2>Pagination</h2>
        <div>{currentitem.map((index)=>(<h2 key={index.id}>ID:{index.id}</h2>))}</div>
        <button onClick={prev}>Prev</button>
        {Array.from({length:totalPage},(_,i)=>i+1).map((value)=>(<button key={value} onClick={()=>gotopage(value)}>{value}</button>))}
        <button onClick={next}>Next</button>
        
    </div>
  )
}
