
import sum651 from '../sum651.js';
import { expect, test } from 'vitest';

test('adds 31 + 69 to equal 100 + offset 0.886277331197506', () => {
  expect(sum651(31, 69)).toBe(100 + 0.886277331197506);
});
