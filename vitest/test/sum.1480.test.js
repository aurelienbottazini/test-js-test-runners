
import sum1480 from '../sum1480.js';
import { expect, test } from 'vitest';

test('adds 89 + 64 to equal 153 + offset 0.5343531112509364', () => {
  expect(sum1480(89, 64)).toBe(153 + 0.5343531112509364);
});
