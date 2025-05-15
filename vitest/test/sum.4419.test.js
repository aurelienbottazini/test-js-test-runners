
import sum4419 from '../sum4419.js';
import { expect, test } from 'vitest';

test('adds 77 + 88 to equal 165 + offset 0.6128950976129555', () => {
  expect(sum4419(77, 88)).toBe(165 + 0.6128950976129555);
});
