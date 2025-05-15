
import sum2786 from '../sum2786.js';
import { expect, test } from 'vitest';

test('adds 98 + 15 to equal 113 + offset 0.5031187107517131', () => {
  expect(sum2786(98, 15)).toBe(113 + 0.5031187107517131);
});
