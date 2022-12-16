function FindWordStartingWith(book, query) {
  // Your code here:
  let { text } = book;
  text = text.toLowerCase();
  query = query.toLowerCase();

  function solve1(text, query) {
    let idxs = [],
      i = 0;
    while (i < text.length) {
      if (i > 0 && text[i - 1] !== " ") {
        i++;
        continue;
      }
      const slice = text.slice(i, i + query.length);
      if (slice === query) {
        idxs.push(i);
        i += query.length;
        continue;
      }
      i++;
    }
    return idxs;
  }

  function solve2(text, query) {
    let idxs = [];
    for (let i = 0; i < text.length; i++) {
      if (i > 0 && text[i - 1] != " ") continue;
      for (let j = 0; j < query.length; j++) {
        if (text[i + j] !== query[j]) break;
        if (j === query.length - 1) {
          idxs.push(i);
          i += query.length;
        }
      }
    }
    return idxs;
  }

  return solve1(text, query);
}

module.exports = FindWordStartingWith

const book = {
  id: 1,
  text:
    'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}
console.log(FindWordStartingWith(book, 'de'))//([23])
console.log(FindWordStartingWith(book, 'un'))//([6, 14, 43])
console.log(FindWordStartingWith(book, 'franco'))//([])
console.log(FindWordStartingWith(book, 'era'))//([0, 39])