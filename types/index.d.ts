declare module 'afinn-165' {
  var dict: Record<string, number>;
  export default dict;
}

declare module 'sentiment' {
  interface SentimentAnalysis {
    score: number;
    comperative: number;
    calculation: Record<string, number>[];
    tokens: string[];
    words: string[];
    positive: string[];
    negative: string[];
  }

  export default class Sentiment {
    constructor();
    analyze(text: string): SentimentAnalysis;
  }
}
