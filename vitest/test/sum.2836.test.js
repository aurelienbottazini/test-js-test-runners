
import sum2836 from '../sum2836.js';
import { expect, test } from 'vitest';

test('adds 28 + 4 to equal 32 + offset 0.6299348939297019', () => {
  expect(sum2836(28, 4)).toBe(32 + 0.6299348939297019);
});
