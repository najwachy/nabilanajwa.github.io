document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    document.body.classList[window.pageYOffset > (prevScrollpos || 0) ? 'add' : 'remove']("scrolled");
    prevScrollpos = window.pageYOffset;
  };

  const searchForm = document.getElementById('searchForm');
  const resultContainer = document.getElementById('result');

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const cityName = document.getElementById('cityInput').value;
    const resultMessage = `maaf terjadi error saat memproses permintaan ${cityName}.`;

    resultContainer.innerHTML = resultMessage;
  });

  const categorySearch = document.getElementById('category-search');
  categorySearch.addEventListener('input', function () {
    const searchKeyword = categorySearch.value.toLowerCase();
    searchFunction(searchKeyword);
  });
});
function searchFunction(keyword) {
  console.log('Pencarian:', keyword);
  // Implementasikan logika pencarian sesuai kebutuhan
}
