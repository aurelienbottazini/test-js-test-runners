
import sum334 from '../sum334.js';
import { expect, test } from 'vitest';

test('adds 49 + 75 to equal 124 + offset 0.9641228075936414', () => {
  expect(sum334(49, 75)).toBe(124 + 0.9641228075936414);
});
