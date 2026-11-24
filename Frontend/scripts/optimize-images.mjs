import sharp from "sharp";

const images = [
  {
    input: "public/images/apps/pratik/logopratik.png",
    output: "public/images/apps/pratik/pratik.webp",
    width: 1100,
  },
  {
    input: "public/images/apps/moody/moodylogo.png",
    output: "public/images/apps/moody/moody.webp",
    width: 850,
  },
  {
    input: "public/brand/escuro-semfundo.png",
    output: "public/brand/lupyx-header.webp",
    width: 160,
  },
];

for (const image of images) {
  const result = await sharp(image.input)
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .ensureAlpha()
    .webp({
      quality: 82,
      alphaQuality: 100,
      effort: 6,
      lossless: false,
    })
    .toFile(image.output);

  console.log(
    `${image.output}: ${(result.size / 1024).toFixed(1)} KB`
  );
}

console.log("Imagens otimizadas com sucesso!");