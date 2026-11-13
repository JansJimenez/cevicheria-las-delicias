const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const distDir = path.join(rootDir, "dist");

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  if (!exists) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Limpiar y crear carpeta dist/ para despliegue en Vercel
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copiar archivos principales
const filesToCopy = ["index.html", "app.js", "styles.css"];
filesToCopy.forEach((file) => {
  const srcFile = path.join(rootDir, file);
  const destFile = path.join(distDir, file);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
  }
});

// Copiar carpeta completa de assets (logo, QR e imágenes de todos los platos)
copyRecursiveSync(path.join(rootDir, "assets"), path.join(distDir, "assets"));

console.log("✅ Build completado con éxito en ./dist (incluyendo index.html, app.js, styles.css y todos los assets).");
