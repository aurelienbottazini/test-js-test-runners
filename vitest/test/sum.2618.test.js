
import sum2618 from '../sum2618.js';
import { expect, test } from 'vitest';

test('adds 85 + 31 to equal 116 + offset 0.4378969545194342', () => {
  expect(sum2618(85, 31)).toBe(116 + 0.4378969545194342);
});
