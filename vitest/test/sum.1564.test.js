
import sum1564 from '../sum1564.js';
import { expect, test } from 'vitest';

test('adds 61 + 11 to equal 72 + offset 0.6487817936917062', () => {
  expect(sum1564(61, 11)).toBe(72 + 0.6487817936917062);
});
