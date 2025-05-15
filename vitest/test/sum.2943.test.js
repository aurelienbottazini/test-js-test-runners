
import sum2943 from '../sum2943.js';
import { expect, test } from 'vitest';

test('adds 34 + 44 to equal 78 + offset 0.8340872508362837', () => {
  expect(sum2943(34, 44)).toBe(78 + 0.8340872508362837);
});
