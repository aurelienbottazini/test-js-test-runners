
import sum2853 from '../sum2853.js';
import { expect, test } from 'vitest';

test('adds 29 + 34 to equal 63 + offset 0.3658684834739133', () => {
  expect(sum2853(29, 34)).toBe(63 + 0.3658684834739133);
});
