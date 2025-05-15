
import sum2587 from '../sum2587.js';
import { expect, test } from 'vitest';

test('adds 2 + 61 to equal 63 + offset 0.4010550965994697', () => {
  expect(sum2587(2, 61)).toBe(63 + 0.4010550965994697);
});
