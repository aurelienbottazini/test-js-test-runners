
import sum2594 from '../sum2594.js';
import { expect, test } from 'vitest';

test('adds 7 + 98 to equal 105 + offset 0.5922513460249033', () => {
  expect(sum2594(7, 98)).toBe(105 + 0.5922513460249033);
});
