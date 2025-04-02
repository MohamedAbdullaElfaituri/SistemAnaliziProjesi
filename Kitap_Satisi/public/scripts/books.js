async function loadCSV() {
    try {
        const response = await fetch("Kitap_Satisi/public/data/books.csv"); // CSV dosyanın yolu
        const data = await response.text();

        const rows = data.trim().split("\n"); // Satırları diziye çevir
        const headers = rows[0].split(",").map(h => h.trim()); // Başlıkları al

        let books = [];
        for (let i = 1; i < rows.length; i++) { // İlk satır başlık, diğerlerini işle
            const values = rows[i].split(",").map(v => v.trim());
            let book = {};

            for (let j = 0; j < headers.length; j++) {
                book[headers[j]] = values[j] || ""; // Boş değerleri önlemek için
            }

            books.push(book);
        }

        displayBooks(books);
    } catch (error) {
        console.error("CSV yüklenirken hata oluştu:", error);
    }
}

function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Önceki içerikleri temizle

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        // Resim URL'si varsa, ilk geçerli URL'yi alıyoruz
        const imageUrl = book["Image-URL-L"] ;

        bookDiv.innerHTML = `
            <img src="${imageUrl}" alt="${book['Book-Title']}" class="book-image">
            <h3>${book["Book-Title"]}</h3>
            <p><strong>Yazar:</strong> ${book["Book-Author"]}</p>
            <p><strong>Yayınevi:</strong> ${book["Publisher"]}</p>
            <p><strong>Yayın Yılı:</strong> ${book["Year-Of-Publication"]}</p>
            <p><strong>Fiyat:</strong> ${book["Price"]}</p>
            <button class="btn-add-to-cart">Sepete Ekle</button>
        `;

        bookList.appendChild(bookDiv);
    }
}

// Sayfa yüklendiğinde veriyi çek
window.onload = loadCSV;
