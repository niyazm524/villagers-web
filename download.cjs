const { mkdir } = require("fs/promises");
const fs = require('fs')
const { Readable } = require('stream');
const { finished } = require('stream/promises');
const path = require("path");
const downloadFile = (async (url, fileName) => {
  const res = await fetch(url);
  if (!fs.existsSync("public")) await mkdir("public"); //Optional if you already have downloads directory
  const destination = path.resolve("./public", fileName);
  const folder = path.dirname(destination);
  if (!fs.existsSync(folder)) {
    console.log('create folder', folder)
    await fs.mkdirSync(folder, {recursive:true}); //Optional if you already have downloads directory
  }
  const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
});


const table = require('./src/minecraft/profession-images.json');

(async () => {
	const headers = [
	    "Desert",
	    "Jungle",
	    "Plains",
	    "Savanna",
	    "Snow",
	    "Swamp",
	    "Taiga"
	];
	for (const t of table) {
		for (const h of headers) {
			console.log('Downloading...', t[h])
			await downloadFile(t[h], `images/villagers/${t.Profession}/${h}.png`);
			t[h] = `/images/villagers/${t.Profession}/${h}.png`;
		}
	}

	console.log(JSON.stringify(table, null, 4))
})()
