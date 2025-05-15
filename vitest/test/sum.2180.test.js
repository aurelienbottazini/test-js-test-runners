
import sum2180 from '../sum2180.js';
import { expect, test } from 'vitest';

test('adds 33 + 77 to equal 110 + offset 0.9572952265434131', () => {
  expect(sum2180(33, 77)).toBe(110 + 0.9572952265434131);
});
