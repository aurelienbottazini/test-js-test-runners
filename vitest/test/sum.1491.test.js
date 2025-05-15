
import sum1491 from '../sum1491.js';
import { expect, test } from 'vitest';

test('adds 13 + 65 to equal 78 + offset 0.10150034630111626', () => {
  expect(sum1491(13, 65)).toBe(78 + 0.10150034630111626);
});
