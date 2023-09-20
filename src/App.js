import './App.css';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

const MemeGenerator = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [memeImageUrl, setMemeImageUrl] = useState('');

  useEffect(() => {
    // Fetch the meme image URL when the component mounts
    fetchMemeImage();
  }, [memeTemplate]);

  const fetchMemeImage = () => {
    // Use memegen.link API to fetch meme image
    const apiUrl = `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`;
    setMemeImageUrl(apiUrl);
  };

  const handleTemplateChange = (event) => {
    setMemeTemplate(event.target.value);
    setTopText('');
    setBottomText('');
  };

  const handleDownloadClick = () => {
    // Implement the download functionality here
    // You can use HTML5 <a> tag with the "download" attribute
  };

  return (
    <div>
      <h1>Meme Generator</h1>
      <label htmlFor="topText">Top Text</label>
      <input
        type="text"
        id="topText"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <label htmlFor="bottomText">Bottom Text</label>
      <input
        type="text"
        id="bottomText"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <div>
        <label htmlFor="memeTemplate">Meme Template</label>
        <input
          type="text"
          id="memeTemplate"
          value={memeTemplate}
          onChange={handleTemplateChange}
        />
      </div>
      <div>
        <img
          src={memeImageUrl}
          alt="Meme"
          data-test-id="meme-image"
          onError={() => setMemeImageUrl('')} // Handle image load errors
        />
      </div>
      <button onClick={handleDownloadClick}>Download</button>
    </div>
  );
};

export default MemeGenerator;
