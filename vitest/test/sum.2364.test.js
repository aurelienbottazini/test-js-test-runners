
import sum2364 from '../sum2364.js';
import { expect, test } from 'vitest';

test('adds 63 + 52 to equal 115 + offset 0.9652942198795031', () => {
  expect(sum2364(63, 52)).toBe(115 + 0.9652942198795031);
});
