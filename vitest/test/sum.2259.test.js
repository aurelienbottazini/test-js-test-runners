
import sum2259 from '../sum2259.js';
import { expect, test } from 'vitest';

test('adds 76 + 18 to equal 94 + offset 0.04004585693281326', () => {
  expect(sum2259(76, 18)).toBe(94 + 0.04004585693281326);
});
