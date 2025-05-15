
import sum2891 from '../sum2891.js';
import { expect, test } from 'vitest';

test('adds 72 + 87 to equal 159 + offset 0.8952503812088564', () => {
  expect(sum2891(72, 87)).toBe(159 + 0.8952503812088564);
});
