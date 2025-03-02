import { Jimp } from "jimp";

const image = await Jimp.read("test/mask.png");
const mask = await Jimp.read("test/glint.png");

image.mask(mask);
image.write("test/result.png")