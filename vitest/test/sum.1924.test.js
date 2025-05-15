
import sum1924 from '../sum1924.js';
import { expect, test } from 'vitest';

test('adds 20 + 1 to equal 21 + offset 0.799139854802285', () => {
  expect(sum1924(20, 1)).toBe(21 + 0.799139854802285);
});
