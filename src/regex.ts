import afinn165 from 'afinn-165';

const [positiveWords, negativeWords] = Object.keys(afinn165).reduce(
  (categories, word) => {
    const score = afinn165[word];
    const [positiveWords, negativeWords] = categories;
    if (score > 0) {
      positiveWords.push(word);
    } else {
      negativeWords.push(word);
    }
    return categories;
  },
  [[], []] as [string[], string[]]
);

export const positiveRegex = new RegExp(
  positiveWords.sort((a, b) => b.length - a.length).join('|'),
  'ig'
);

export const negativeRegex = new RegExp(
  negativeWords.sort((a, b) => b.length - a.length).join('|'),
  'ig'
);
