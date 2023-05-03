import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const response = await axios.post("http://localhost:8000/menus/", formData, config);
    if (response.data.lista_of_urls_perdish) {
        console.log(response.data.lista_of_urls_perdish)
        setImageUrls(response.data.lista_of_urls_perdish);
    }
  };
  

  const renderImages = () => {
    return imageUrls.map((urls, index) => {
      return urls.map((url, subIndex) => {
        return (
          <div key={`${index}-${subIndex}`}>
            <img src={url} alt={`Image ${index}-${subIndex}`} />
          </div>
        );
      });
    });
  };
  
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name" />
        <input type="file" onChange={handleFileUpload} />
        <button type="submit">Submit</button>
      </form>
      <div>{renderImages()}</div>
    </div>
  );
}

export default ImageUpload;
