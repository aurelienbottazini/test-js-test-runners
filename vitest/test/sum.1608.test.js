
import sum1608 from '../sum1608.js';
import { expect, test } from 'vitest';

test('adds 30 + 91 to equal 121 + offset 0.7373980406606416', () => {
  expect(sum1608(30, 91)).toBe(121 + 0.7373980406606416);
});
