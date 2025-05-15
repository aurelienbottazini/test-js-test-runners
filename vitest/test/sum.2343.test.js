
import sum2343 from '../sum2343.js';
import { expect, test } from 'vitest';

test('adds 75 + 7 to equal 82 + offset 0.7929848549416123', () => {
  expect(sum2343(75, 7)).toBe(82 + 0.7929848549416123);
});
