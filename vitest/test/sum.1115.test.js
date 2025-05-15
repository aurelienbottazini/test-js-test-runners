
import sum1115 from '../sum1115.js';
import { expect, test } from 'vitest';

test('adds 8 + 15 to equal 23 + offset 0.4200687806860285', () => {
  expect(sum1115(8, 15)).toBe(23 + 0.4200687806860285);
});
