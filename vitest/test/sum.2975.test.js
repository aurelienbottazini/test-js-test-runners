
import sum2975 from '../sum2975.js';
import { expect, test } from 'vitest';

test('adds 64 + 34 to equal 98 + offset 0.49751872421475163', () => {
  expect(sum2975(64, 34)).toBe(98 + 0.49751872421475163);
});
