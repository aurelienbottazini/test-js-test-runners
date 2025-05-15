
import sum1147 from '../sum1147.js';
import { expect, test } from 'vitest';

test('adds 36 + 98 to equal 134 + offset 0.4914331284780664', () => {
  expect(sum1147(36, 98)).toBe(134 + 0.4914331284780664);
});
