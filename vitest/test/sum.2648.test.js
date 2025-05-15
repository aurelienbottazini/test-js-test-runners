
import sum2648 from '../sum2648.js';
import { expect, test } from 'vitest';

test('adds 9 + 9 to equal 18 + offset 0.4739683228071022', () => {
  expect(sum2648(9, 9)).toBe(18 + 0.4739683228071022);
});
