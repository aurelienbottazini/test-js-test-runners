
import sum2983 from '../sum2983.js';
import { expect, test } from 'vitest';

test('adds 98 + 43 to equal 141 + offset 0.2658705489648905', () => {
  expect(sum2983(98, 43)).toBe(141 + 0.2658705489648905);
});
