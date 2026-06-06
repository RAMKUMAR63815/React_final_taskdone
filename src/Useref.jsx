// import React, { useRef, useState } from "react";
// import "./Use.css";

// function App() {
//   // Image Upload
//   const fileInputRef = useRef(null);
//   const [profileImage, setProfileImage] = useState(null);

//   // Like Functionality
//   const [likes, setLikes] = useState(0);
//   const [liked, setLiked] = useState(false);

//   // Comment Section
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);

//   // Handle Image Upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   //Handle Like
//   const handleLike = () => {
//     if (liked) {
//       setLikes(likes - 1);
//     } else {
//       setLikes(likes + 1);
//     }

//     setLiked(!liked);
//   };
// // const handleLike = () => {
// //   setLikes(likes + 1);
// // };

//   // Handle Comment Add
//   const handleAddComment = () => {
//     if (comment.trim() !== "") {
//       setComments([...comments, comment]);
//       setComment("");
//     }
//   };

//   return (
//     <div className="app">
//       <div className="card">
//         <h2>Profile Card</h2>

//         {/* Profile Image */}
//         <div className="profile-container">
//           {profileImage ? (
//             <img src={profileImage} alt="Profile" className="profile-image" />
//           ) : (
//             <div className="placeholder">
//               No Image Selected
//             </div>
//           )}
//         </div>

//         {/* Upload Button */}
//         <input
//           type="file"
//           accept="image/*"
//           ref={fileInputRef}
//           onChange={handleImageUpload}
//           hidden
//         />

//         <button
//           className="upload-btn"
//           onClick={() => fileInputRef.current.click()}
//         >
//           Upload Profile Image
//         </button>

//         {/* Like Section */}
//         <div className="like-section">
//           <button
//             className={`like-btn ${liked ? "active" : ""}`}
//             onClick={handleLike}
//           >
//             ❤️ Like
//           </button>

//           <p>{likes} Likes</p>
//         </div>

//         {/* Comment Section */}
//         <div className="comment-section">
//           <input
//             type="text"
//             placeholder="Write a comment..."
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />

//           <button onClick={handleAddComment}>
//             Add Comment
//           </button>
//         </div>

//         {/* Display Comments */}
//         <div className="comments-list">
//           <h3>Comments</h3>

//           {comments.length === 0 ? (
//             <p>No comments yet</p>
//           ) : (
//             comments.map((item, index) => (
//               <div key={index} className="comment-item">
//                 {item}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React,{useState,useRef,useEffect} from 'react'
export default function Userender() {

    const inputRef = useRef();

    const forceref = () => {
        inputRef.current.focus();
    }

    const [sec, setsec] = useState(0);

    const intervalRef = useRef();

    useEffect(() => {

        intervalRef.current = setInterval(() => {
            setsec((s) => s + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);

    }, []);

//     const [product,setproduct]=useState(true);
//     const [imgUrl,setimgUrl] = useState("");
//     const imgRef = useRef()

//     const handle =(e)=>{
//       const file = e.target.files[0];
//       if (file){
//         const preview = URL.createObjectURL(file);
//         setimgUrl(preview)
//         setproduct(false)
        
//       }

//     }


//     return (
//         <div>

//             <input type='text' ref={inputRef} />

//             <button onClick={forceref}>addd</button>

//             <p>Timer: {sec}</p>

//             <button onClick={() => clearInterval(intervalRef.current)}>
//                 stop
//             </button>
//             <div>
//               <input type="file"
//               ref={imgRef}
//               accept='image/*'
//               hidden 
//               onChange={handle}
              
//               ></input>
//               {setproduct ? (
//                 <div className='ram' onClick={() => imgRef.current.click()} style={{height:"200px",width:"200px",backgroundColor:"yellow", cursor:"pointer", color:"red"}}>updating</div>
//               ):
//                 (<img src={imgUrl}
//                    onClick={() => imgRef.current.click() } />)
              
//             }

//             </div>

//         </div>
//     )
// }
  const [newProduct, setNewProduct] = useState(true);
  const [imgURL, setImgURL] = useState("");

  const imgRef = useRef(0);

  const handleClick = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
      setNewProduct(false);
    }
  };
  return (
    <div>
      {/* eg1 */}
      {/* <nav>
        <input type="text" ref={inputRef} />
        <button onClick={focusinput}>focus input</button>
      </nav> */}
      {/* eg2 */}
      {/* <nav>
        <p>Timer:{sec}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </nav>
      {/* eg3 */}
      <nav> 
        <input
          type="file"
          ref={imgRef}
          accept="image/*"
          hidden
          onChange={handleClick}
        />
        {newProduct ? (
          <div className="container" onClick={() => imgRef.current.click()}>
            updating image...
          </div>
        ) : (
          <img
            className="org-img"
            src={imgURL}
            onClick={() => imgRef.current.click()}
          />
        )}
      </nav>
    </div>
  );
}
