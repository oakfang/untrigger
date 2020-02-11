# untrigger

## Usage with DraftJS

```js
import styled from 'styled-components';
import { CompositeDecorator } from 'draft-js';
import { createSentimentDecorators } from 'untrigger/draftjs';
import { myDecorator } from './my-decorators';

export default new CompositeDecorator([
  myDecorator,
  ...createSentimentDecorators({
    negativeComponent: styled.span`
      color: red;
      text-decoration: line-through;
    `,
    positiveComponent: styled.span`
      color: green;
    `,
  }),
]);
```

## Usage with React (using [`sentiment`](https://www.npmjs.com/package/sentiment))

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSentimentAnalysis } from 'untrigger/hooks';

export function EmojiTextBox() {
  const [text, setText] = useState('');
  const { score } = useSentimentAnalysis(text);
  let emoji = '😐';
  if (score < 0) {
    emoji = '🤬';
  } else if (score > 0) {
    emoji = '😊';
  }
  return (
    <Container>
      <input value={text} onChange={e => setText(e.target.value)} />
      <span>{emoji}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
```
