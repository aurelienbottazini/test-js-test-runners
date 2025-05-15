
import sum4406 from '../sum4406.js';
import { expect, test } from 'vitest';

test('adds 42 + 13 to equal 55 + offset 0.7333557539707531', () => {
  expect(sum4406(42, 13)).toBe(55 + 0.7333557539707531);
});
