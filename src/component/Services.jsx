import React from 'react'
import {Link,Outlet} from "react-router-dom"

export default function () {
  return (
    <div> <Outlet />
         <h2>Service component</h2>
        <div className="sub-header">
            <Link to={"/App"}>Web development</Link>
            <Link to={"/Web"}>App development</Link>
           
        </div>
        </div>
  )
}
