const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    // Especifica la carpeta donde se guardarán los archivos
    form.uploadDir = './uploads';

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al cargar el archivo.');
        return;
      }

      const oldpath = files.filetoupload.path;
      const newpath = './uploads/' + files.filetoupload.name;

      fs.rename(oldpath, newpath, (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error al mover el archivo.');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Archivo subido exitosamente!</h1>');
        res.end();
      });
    });

    return;
  }

  // Mostrar el formulario para cargar archivos
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  res.end();
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
