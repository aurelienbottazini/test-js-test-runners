
import sum2141 from '../sum2141.js';
import { expect, test } from 'vitest';

test('adds 77 + 4 to equal 81 + offset 0.027954316163872117', () => {
  expect(sum2141(77, 4)).toBe(81 + 0.027954316163872117);
});
