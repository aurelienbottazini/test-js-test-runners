
import sum283 from '../sum283.js';
import { expect, test } from 'vitest';

test('adds 47 + 8 to equal 55 + offset 0.08946019189421583', () => {
  expect(sum283(47, 8)).toBe(55 + 0.08946019189421583);
});
