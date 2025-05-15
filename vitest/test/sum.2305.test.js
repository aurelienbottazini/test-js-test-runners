
import sum2305 from '../sum2305.js';
import { expect, test } from 'vitest';

test('adds 15 + 35 to equal 50 + offset 0.1878015115256162', () => {
  expect(sum2305(15, 35)).toBe(50 + 0.1878015115256162);
});
