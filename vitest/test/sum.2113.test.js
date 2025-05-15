
import sum2113 from '../sum2113.js';
import { expect, test } from 'vitest';

test('adds 4 + 80 to equal 84 + offset 0.9522474041214416', () => {
  expect(sum2113(4, 80)).toBe(84 + 0.9522474041214416);
});
