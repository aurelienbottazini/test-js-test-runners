
import sum2615 from '../sum2615.js';
import { expect, test } from 'vitest';

test('adds 24 + 11 to equal 35 + offset 0.28660004319374954', () => {
  expect(sum2615(24, 11)).toBe(35 + 0.28660004319374954);
});
