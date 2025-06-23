const books = [
  {
    title: "Dead Line",
    author: "Daniel",
    publisher: "TechPress",
    year: 2018,
    image: "img/Dead Line.jpeg"
  },
  {
    title: "Dismantled Victory",
    author: "Diana",
    publisher: "AI Books",
    year: 2019,
    image: "img/Dismantled Victory.jpeg"
  },
  {
    title: "Duty And Death",
    author: "David",
    publisher: "CodePress",
    year: 2020,
    image: "img/Duty And Death.jpeg"
  },
  {
    title: "Devil",
    author: "Derek",
    publisher: "NetPub",
    year: 2020,
    image: "img/Devil.jpeg"
  }
];

const keywordInput = document.getElementById("keyword");
const yearInput = document.getElementById("year");
const resultArea = document.getElementById("resultArea");
const radios = document.getElementsByName("searchType");

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    yearInput.style.display = radio.value === "title_year" ? "inline-block" : "none";
    searchBooks();
  });
});

keywordInput.addEventListener("input", searchBooks);
yearInput.addEventListener("input", searchBooks);

function searchBooks() {
  const keyword = keywordInput.value.toLowerCase();
  const year = parseInt(yearInput.value);
  const selected = document.querySelector("input[name='searchType']:checked");

  if (!selected) {
    resultArea.innerHTML = "<p>Please select a search type.</p>";
    return;
  }

  let filtered = [];

  switch (selected.value) {
    case "title":
      filtered = books.filter(b => b.title.toLowerCase().includes(keyword));
      break;
    case "author":
      filtered = books.filter(b => b.author.toLowerCase().includes(keyword));
      break;
    case "publisher":
      filtered = books.filter(b => b.publisher.toLowerCase().includes(keyword));
      break;
    case "title_year":
      filtered = books.filter(
        b => b.title.toLowerCase().includes(keyword) && b.year === year
      );
      break;
  }

  showResults(filtered);
}

function showResults(list) {
  if (list.length === 0) {
    resultArea.innerHTML = "<p>No results found.</p>";
    return;
  }

  resultArea.innerHTML = list.map(book => `
    <div class="card">
      <img src="${book.image}" alt="${book.title}" />
      <div class="card-content">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Publisher:</strong> ${book.publisher}</p>
        <p><strong>Year:</strong> ${book.year}</p>
      </div>
    </div>
  `).join('');
}
