
import sum3677 from '../sum3677.js';
import { expect, test } from 'vitest';

test('adds 61 + 72 to equal 133 + offset 0.7604566693836426', () => {
  expect(sum3677(61, 72)).toBe(133 + 0.7604566693836426);
});
