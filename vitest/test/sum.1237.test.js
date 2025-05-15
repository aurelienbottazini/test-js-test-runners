
import sum1237 from '../sum1237.js';
import { expect, test } from 'vitest';

test('adds 69 + 9 to equal 78 + offset 0.3262021511225137', () => {
  expect(sum1237(69, 9)).toBe(78 + 0.3262021511225137);
});
