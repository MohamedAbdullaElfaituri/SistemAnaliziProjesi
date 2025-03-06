// Ülkeleri yükle (RestCountries API'den)
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const countrySelect = document.getElementById("country");

        data.sort((a, b) => a.name.common.localeCompare(b.name.common)); // Alfabetik sıralama

        data.forEach(country => {
            const option = document.createElement("option");
            option.value = country.name.common; // Ülke tam adı lazım (ör: Turkey)
            option.textContent = country.translations.tur?.common || country.name.common;
            countrySelect.appendChild(option);
        });
    })
    .catch(error => console.error("Ülke verileri yüklenirken hata oluştu:", error));

// Şehirleri API'den yükle
document.getElementById("country").addEventListener("change", function() {
    const country = this.value;
    const citySelect = document.getElementById("city");

    citySelect.innerHTML = '<option value="">Şehir yükleniyor...</option>'; // Yükleme mesajı

    fetch("https://countriesnow.space/api/v0.1/countries/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: country })
    })
    .then(response => response.json())
    .then(data => {
        citySelect.innerHTML = '<option value="">Şehir seçin</option>'; // İlk seçenek

        if (data.data.length > 0) {
            data.data.forEach(city => {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        } else {
            citySelect.innerHTML = '<option value="">Şehir bulunamadı</option>';
        }
    })
    .catch(error => console.error("Şehirler yüklenirken hata oluştu:", error));
});
