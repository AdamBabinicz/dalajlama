import images from "./images";

const wines = [
  {
    title: "Gendun Drup",
    price: "1391–1474",
    tags: "?",
  },
  {
    title: "Gendun Gjaco",
    price: "1475–1541",
    tags: "?",
  },
  {
    title: "Sonam Gjaco	",
    price: "1543–1588",
    tags: "1578–1588",
  },
  {
    title: "Jonten Gjaco",
    price: "1589–1616",
    tags: "?",
  },
  {
    title: "Lobsang Gjaco",
    price: "1617–1682",
    tags: "1642–1682",
  },
  {
    title: "Cangjang Gjaco",
    price: "1683–1706",
    tags: "? –1706",
  },
  {
    title: "Kelzang Gjaco",
    price: "1708–1757",
    tags: "1751–1757",
  },
];

const cocktails = [
  {
    title: "Jamphel Gjaco",
    price: "1758–1804",
    tags: "1786–1804",
  },
  {
    title: "Lungtok Gjaco",
    price: "1806–1815",
    tags: "1808–1815",
  },
  {
    title: "Cultrim Gjaco	",
    price: "1816–1837",
    tags: "?",
  },
  {
    title: "Khedrub Gjaco",
    price: "1838–1856",
    tags: "1844–1856",
  },
  {
    title: "Trinlej Gjaco",
    price: "1857–1875",
    tags: "1873–1875",
  },
  {
    title: "Thubten Gjaco",
    price: "1876–1933",
    tags: "1895–1933",
  },
  {
    title: "Tenzin Gjaco",
    price: "1935-nadal",
    tags: "1940–(od 1959 na uchodźstwie)",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Siła",
    subtitle: "Bądź otwarty na zmiany, ale nie zapominaj o swoich wartościach.",
  },
  {
    imgUrl: images.award01,
    title: "Miłość",
    subtitle: "Nie dopuść, by niewielkie spory zniszczyły wielką przyjaźń.",
  },
  {
    imgUrl: images.award05,
    title: "Mądrość",
    subtitle:
      "Dziel się swoją wiedzą. To sposób na osiągnięcie nieśmiertelności.",
  },
  {
    imgUrl: images.award03,
    title: "Cierpienie",
    subtitle:
      "Postawienie sobie zbyt wysokich wymagań powoduje życie w nieustannym lęku.",
  },
];

export default { wines, cocktails, awards };
