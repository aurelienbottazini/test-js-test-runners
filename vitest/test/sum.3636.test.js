
import sum3636 from '../sum3636.js';
import { expect, test } from 'vitest';

test('adds 3 + 23 to equal 26 + offset 0.308899818160954', () => {
  expect(sum3636(3, 23)).toBe(26 + 0.308899818160954);
});
