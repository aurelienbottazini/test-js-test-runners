
import sum2749 from '../sum2749.js';
import { expect, test } from 'vitest';

test('adds 90 + 42 to equal 132 + offset 0.734952356637216', () => {
  expect(sum2749(90, 42)).toBe(132 + 0.734952356637216);
});
