
import sum4588 from '../sum4588.js';
import { expect, test } from 'vitest';

test('adds 60 + 0 to equal 60 + offset 0.02696557300330471', () => {
  expect(sum4588(60, 0)).toBe(60 + 0.02696557300330471);
});
