import { useState, useEffect } from "react";
import shortid from "shortid";
import TextInput from "./TextInput";
import { or } from "ajv/dist/compile/codegen";

function InputShortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [shortContainer, setShortContainer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [button, setButton] = useState("");
  const [errorInput, setErrorInput] = useState(null);
  const [originalLink, setOriginalLink] = useState([]);

  const handlebtnCopy = (id) => {
    setButton(id);
  };

  const handleShortenUrl = () => {
    if (originalUrl === "") {
      setErrorInput("please enter your url");
    } else {
      setLoading(true);
      const shortId = shortid.generate();
      const shortenedUrl = `http://short.url/${shortId}`;
      setShortUrl(shortenedUrl);
      setOriginalUrl("");
      setLoading(false);
      let shortLinks = shortUrl;
      let shortLinkArr = [...shortContainer];
      shortLinkArr.push(shortLinks);
      setShortContainer(shortLinkArr);
      let mainLink = originalLink;
      let mainLinkArr = [originalUrl];
      mainLinkArr.push(mainLink);
      setOriginalLink(mainLinkArr);
    setErrorInput("");
    }
  };

  const handleInputChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  const handleCopy = async (item) => {
    try {
      await navigator.clipboard.writeText(item);
      setCopied(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [button]);

  if (loading) {
    return <p className="">Loading...</p>;
  }

  if (error) {
    return <p className="">Something went wrong</p>;
  }

  // if (originalUrl==="") {
  //   return <p className="">Please fill your link</p>
  // }
  return (
    <div className="input-body">
      <div>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={originalUrl}
          onChange={handleInputChange}
          placeholder="Shorten a link here"
        />
        <button className="btn-short" onClick={handleShortenUrl}>
          Shorten it!
        </button>
      </div>
      <p style={{color:"red", marginTop:"-2rem", textAlign:"center"}}>{errorInput}</p>
      </div>

      {shortUrl && (
        <div>
          <ul className="shorted-main-container">
            {shortContainer.map((url, index) => (
              <li>
                <TextInput
                  key={index}
                  id={index}
                  originalUrl={originalUrl}
                  url={url}
                  text={shortContainer}
                  onCopy={() => handleCopy(url)}
                  copy={copied}
                  handlebtnCopy={() => handlebtnCopy(index)}
                  btnCopy={button}
                  mainLink={originalLink}
                />
                {/* <p>{url}</p>
                        <CopyToClipboard 
                            text={shortContainer}
                            onCopy={()=>setCopied(true)}
                        >
                            <button className={copied ? "copied": "not-copied"}>copy to keyboard</button>
                        </CopyToClipboard> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default InputShortener;
