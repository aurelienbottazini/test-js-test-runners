
import sum4452 from '../sum4452.js';
import { expect, test } from 'vitest';

test('adds 70 + 79 to equal 149 + offset 0.9849892276951683', () => {
  expect(sum4452(70, 79)).toBe(149 + 0.9849892276951683);
});
