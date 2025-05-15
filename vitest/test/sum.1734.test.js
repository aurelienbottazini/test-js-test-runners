
import sum1734 from '../sum1734.js';
import { expect, test } from 'vitest';

test('adds 31 + 98 to equal 129 + offset 0.40887829784822116', () => {
  expect(sum1734(31, 98)).toBe(129 + 0.40887829784822116);
});
