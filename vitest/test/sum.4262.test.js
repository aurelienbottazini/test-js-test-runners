
import sum4262 from '../sum4262.js';
import { expect, test } from 'vitest';

test('adds 39 + 69 to equal 108 + offset 0.32311588895787', () => {
  expect(sum4262(39, 69)).toBe(108 + 0.32311588895787);
});
