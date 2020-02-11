import Sentiment from 'sentiment';
import { useMemo } from 'react';

export function useSentimentAnalyzer() {
  const analyzer = useMemo(() => new Sentiment(), []);
  return analyzer;
}

export function useSentimentAnalysis(text: string) {
  const analyzer = useSentimentAnalyzer();
  const sentiment = useMemo(() => analyzer.analyze(text), [text]);
  return sentiment;
}
