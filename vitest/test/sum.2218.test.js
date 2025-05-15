
import sum2218 from '../sum2218.js';
import { expect, test } from 'vitest';

test('adds 55 + 21 to equal 76 + offset 0.7300940763718697', () => {
  expect(sum2218(55, 21)).toBe(76 + 0.7300940763718697);
});
