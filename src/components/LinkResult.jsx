// import {useState, useEffect } from "react";
// import axios from "axios"
// import CopyToClipboard from "react-copy-to-clipboard";

// function LinkResult( {inputValue}) {
    
//     const [shortenedLink, setShortenedLink] = useState("");
//     const [copied, setCopied] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false)

//     const fetchData = async () =>{
//         try{
//              setLoading(true);
//              const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
//              setShortenedLink(res.data.result.full_shrot_link);
//         }catch(err){
//             setError(err);
//         }finally{
//             setLoading(false);
//         }
//     }
//     useEffect(() => {
//       if (inputValue.length) {
//         fetchData();
//       }
//     }, [inputValue]);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setCopied(false);
//       }, 1000);

//       return () => clearTimeout(timer);

//     }, [copied])

//     if (loading) {
//         return <p className="">Loading...</p>
//     }

//     if (error) {
//         return <p className="">Something went wrong</p>
//     }

//     return <div className="">
//         <p className="">{shortenedLink}</p>
//         {shortenedLink && (
//             <CopyToClipboard 
//                 text={shortenedLink}
//                 onCopy={()=>setCopied(true)}
//             >
//                 <button className={copied ? "copied": " "}>copy to keyboard</button>
//             </CopyToClipboard>
//         )}
        
//     </div>
// }

// export default LinkResult;