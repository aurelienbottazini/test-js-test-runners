
import sum4348 from '../sum4348.js';
import { expect, test } from 'vitest';

test('adds 42 + 21 to equal 63 + offset 0.7023577582217524', () => {
  expect(sum4348(42, 21)).toBe(63 + 0.7023577582217524);
});
