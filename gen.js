const fs = require('fs');
const path = require('path');

// Folders to scan
const folders = ["notes", "papers"];

// Function to generate tiles for a single folder
function generateTilesForFolder(folderName) {
  const folderPath = path.join(__dirname, folderName);

  if (!fs.existsSync(folderPath)) {
    console.warn(`⚠ Folder not found: ${folderName}`);
    return "";
  }

  const files = fs.readdirSync(folderPath);

  let html = `
<h2>${folderName.toUpperCase()}</h2>
<div class="tile-container">`;

  files.forEach(file => {
    const ext = path.extname(file).replace(".", "").toUpperCase();
    const link = `${folderName}/${file}`;

    html += `
  <a href="${link}" class="tile" target="_blank">
    <span class="tile-title">${file}</span>
    <span class="tile-icon">${ext}</span>
  </a>`;
  });

  html += `
</div>\n`;

  return html;
}

// Build final HTML
let finalHTML = "<!-- AUTO-GENERATED FILE LIST -->\n";

folders.forEach(folder => {
  finalHTML += generateTilesForFolder(folder);
});

// Save output
fs.writeFileSync("generated-links.html", finalHTML, "utf8");

console.log("✔ generated-links.html created successfully!");