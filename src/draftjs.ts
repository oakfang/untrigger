import { ComponentType } from 'react';
import { createWorldListDecorator } from 'draft-js-regex-decorator';
import { negativeWords, positiveWords } from './words';

interface SentimentComponents {
  negativeComponent?: ComponentType;
  positiveComponent?: ComponentType;
}

export function createSentimentDecorators({
  negativeComponent,
  positiveComponent,
}: SentimentComponents) {
  const decorators: ReturnType<typeof createWorldListDecorator>[] = [];
  if (negativeComponent) {
    decorators.push(createWorldListDecorator(negativeWords, negativeComponent));
  }
  if (positiveComponent) {
    decorators.push(createWorldListDecorator(positiveWords, positiveComponent));
  }
  return decorators;
}
