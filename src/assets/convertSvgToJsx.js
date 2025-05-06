import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
// const fs = require('fs');
// const path = require('path');
// Filepath of the SVG file

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'HeroSvg.jsx');

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Replace `class` with `className`
  let updatedData = data.replace(/\bclass="/g, 'className="');

  // Replace `style="..."` with `style={{ ... }}`
  updatedData = updatedData.replace(/style="([^"]*)"/g, (match, styleContent) => {
    const styleObject = styleContent
      .split(';')
      .filter(Boolean)
      .map((style) => {
        const [key, value] = style.split(':').map((s) => s.trim());
        const camelCaseKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        return `"${camelCaseKey}": "${value}"`;
      })
      .join(', ');
    return `style={{ ${styleObject} }}`;
  });

  // Self-close tags
  updatedData = updatedData.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '<$1$2 />');

  // Replace `xmlns:xlink` with `xmlnsXlink`
  updatedData = updatedData.replace(/xmlns:xlink/g, 'xmlnsXlink');

  // Write the updated file
  fs.writeFile(filePath, updatedData, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing the file:', writeErr);
      return;
    }
    console.log('SVG successfully converted to React-compatible JSX!');
  });
});
