
import sum3441 from '../sum3441.js';
import { expect, test } from 'vitest';

test('adds 99 + 30 to equal 129 + offset 0.13548392927794362', () => {
  expect(sum3441(99, 30)).toBe(129 + 0.13548392927794362);
});
