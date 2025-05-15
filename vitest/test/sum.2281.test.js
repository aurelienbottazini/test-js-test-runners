
import sum2281 from '../sum2281.js';
import { expect, test } from 'vitest';

test('adds 65 + 76 to equal 141 + offset 0.07749336251788796', () => {
  expect(sum2281(65, 76)).toBe(141 + 0.07749336251788796);
});
