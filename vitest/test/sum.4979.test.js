
import sum4979 from '../sum4979.js';
import { expect, test } from 'vitest';

test('adds 61 + 44 to equal 105 + offset 0.7975769208676688', () => {
  expect(sum4979(61, 44)).toBe(105 + 0.7975769208676688);
});
