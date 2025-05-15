
import sum2990 from '../sum2990.js';
import { expect, test } from 'vitest';

test('adds 56 + 63 to equal 119 + offset 0.8425518149164934', () => {
  expect(sum2990(56, 63)).toBe(119 + 0.8425518149164934);
});
