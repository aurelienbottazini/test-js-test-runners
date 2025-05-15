
import sum2247 from '../sum2247.js';
import { expect, test } from 'vitest';

test('adds 30 + 3 to equal 33 + offset 0.1991137823997483', () => {
  expect(sum2247(30, 3)).toBe(33 + 0.1991137823997483);
});
