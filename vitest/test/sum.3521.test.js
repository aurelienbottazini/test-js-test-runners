
import sum3521 from '../sum3521.js';
import { expect, test } from 'vitest';

test('adds 71 + 1 to equal 72 + offset 0.2387457498611033', () => {
  expect(sum3521(71, 1)).toBe(72 + 0.2387457498611033);
});
