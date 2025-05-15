
import sum4785 from '../sum4785.js';
import { expect, test } from 'vitest';

test('adds 49 + 42 to equal 91 + offset 0.8591503838415083', () => {
  expect(sum4785(49, 42)).toBe(91 + 0.8591503838415083);
});
