
import sum2066 from '../sum2066.js';
import { expect, test } from 'vitest';

test('adds 10 + 10 to equal 20 + offset 0.634830431910199', () => {
  expect(sum2066(10, 10)).toBe(20 + 0.634830431910199);
});
