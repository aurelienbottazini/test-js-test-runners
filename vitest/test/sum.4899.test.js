
import sum4899 from '../sum4899.js';
import { expect, test } from 'vitest';

test('adds 34 + 37 to equal 71 + offset 0.38039188503536314', () => {
  expect(sum4899(34, 37)).toBe(71 + 0.38039188503536314);
});
