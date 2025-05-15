
import sum1674 from '../sum1674.js';
import { expect, test } from 'vitest';

test('adds 79 + 45 to equal 124 + offset 0.2749402515312992', () => {
  expect(sum1674(79, 45)).toBe(124 + 0.2749402515312992);
});
