import { ComponentType } from 'react';
import createRegExDecorator from 'draft-js-regex-decorator';
import { negativeRegex, positiveRegex } from './regex';

interface SentimentComponents {
  negativeComponent?: ComponentType;
  positiveComponent?: ComponentType;
}

export function createSentimentDecorators({
  negativeComponent,
  positiveComponent,
}: SentimentComponents) {
  const decorators: ReturnType<typeof createRegExDecorator>[] = [];
  if (negativeComponent) {
    decorators.push(createRegExDecorator(negativeRegex, negativeComponent));
  }
  if (positiveComponent) {
    decorators.push(createRegExDecorator(positiveRegex, positiveComponent));
  }
  return decorators;
}
