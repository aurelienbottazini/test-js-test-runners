
import sum1236 from '../sum1236.js';
import { expect, test } from 'vitest';

test('adds 91 + 50 to equal 141 + offset 0.30218054612892487', () => {
  expect(sum1236(91, 50)).toBe(141 + 0.30218054612892487);
});
