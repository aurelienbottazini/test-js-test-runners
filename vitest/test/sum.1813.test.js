
import sum1813 from '../sum1813.js';
import { expect, test } from 'vitest';

test('adds 28 + 21 to equal 49 + offset 0.2797051932654887', () => {
  expect(sum1813(28, 21)).toBe(49 + 0.2797051932654887);
});
