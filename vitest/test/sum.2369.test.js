
import sum2369 from '../sum2369.js';
import { expect, test } from 'vitest';

test('adds 49 + 4 to equal 53 + offset 0.01647787659579114', () => {
  expect(sum2369(49, 4)).toBe(53 + 0.01647787659579114);
});
