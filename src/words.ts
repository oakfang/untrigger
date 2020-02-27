import afinn165 from 'afinn-165';

export const [positiveWords, negativeWords] = Object.keys(afinn165).reduce(
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
