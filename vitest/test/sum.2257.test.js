
import sum2257 from '../sum2257.js';
import { expect, test } from 'vitest';

test('adds 78 + 37 to equal 115 + offset 0.5041160702131601', () => {
  expect(sum2257(78, 37)).toBe(115 + 0.5041160702131601);
});
