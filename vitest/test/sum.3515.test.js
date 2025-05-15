
import sum3515 from '../sum3515.js';
import { expect, test } from 'vitest';

test('adds 96 + 34 to equal 130 + offset 0.09524437368389493', () => {
  expect(sum3515(96, 34)).toBe(130 + 0.09524437368389493);
});
