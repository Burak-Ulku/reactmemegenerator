import React, { useState } from 'react';

function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState(''); // Store the meme template URL here

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  const handleGenerateMeme = () => {
    // Construct the meme URL using meme template, topText, and bottomText
    const memeUrl = `https://memegen.link/${template}/${topText}/${bottomText}.jpg`;

    // Logic to download or display the meme
    // You can open the meme URL in a new tab or provide a download link
  };

  return (
    <div>
      <label htmlFor="topText">Top text:</label>
      <input
        type="text"
        id="topText"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />

      <label htmlFor="bottomText">Bottom text:</label>
      <input
        type="text"
        id="bottomText"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />

      <label htmlFor="memeTemplate">Meme template:</label>
      <input
        type="text"
        id="memeTemplate"
        value={template}
        onChange={handleTemplateChange}
      />

      <button onClick={handleGenerateMeme}>Generate Meme</button>

      {/* Display the meme preview */}
      <img
        src={`https://memegen.link/${template}/${topText}/${bottomText}.jpg`}
        alt="Meme Preview"
        data-test-id="meme-image"
      />
    </div>
  );
}

export default MemeGenerator;
