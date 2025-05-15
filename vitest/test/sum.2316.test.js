
import sum2316 from '../sum2316.js';
import { expect, test } from 'vitest';

test('adds 78 + 76 to equal 154 + offset 0.07712830220846545', () => {
  expect(sum2316(78, 76)).toBe(154 + 0.07712830220846545);
});
