// Görev 2: Mesaj Biçimlendirme
function formatMessage(message, maxLength) {
  // Dize uzunluğunu kontrol et
  if (message.length <= maxLength) {
    // Uzunluk maxLength'e eşit veya daha kısa ise orijinal diziyi döndür
    return message;
  } else {
    // Uzunluk maxLength'i aşıyorsa diziyi kısalt ve üç nokta ekle
    return message.slice(0, maxLength) + "...";
  }
}

// Test kodları
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"