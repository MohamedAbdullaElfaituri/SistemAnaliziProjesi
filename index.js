const express = require("express");
const app = express();
const path = require('path');
const port = 3128;


// Public klasörünü sunucuya bağla
app.use(express.static(path.join(__dirname, '/')));

// Ana sayfayı sunmak için (opsiyonel)
// Bu route, public klasöründeki index.html dosyasını otomatik olarak sunar.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/about.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/login.html'));
});
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/signup.html'));
});

app.get('/sepet', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/sepet.html'));
});
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/products.html'));
});
app.get('/orders', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/orders.html'));
});
app.get('/detail', (req, res) => {  
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/detail.html'));  
});
app.get('/adres', (req, res) => {  
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/adres.html'));
});
app.get('/payment', (req, res) => {  
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/payment.html'));
});
app.get('/layout', (req, res) => {  
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/views/layout.html'));
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor...`);
});
