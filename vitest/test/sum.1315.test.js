
import sum1315 from '../sum1315.js';
import { expect, test } from 'vitest';

test('adds 20 + 8 to equal 28 + offset 0.6928518508437563', () => {
  expect(sum1315(20, 8)).toBe(28 + 0.6928518508437563);
});
