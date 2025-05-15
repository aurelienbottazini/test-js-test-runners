
import sum2929 from '../sum2929.js';
import { expect, test } from 'vitest';

test('adds 8 + 16 to equal 24 + offset 0.05802895924360851', () => {
  expect(sum2929(8, 16)).toBe(24 + 0.05802895924360851);
});
