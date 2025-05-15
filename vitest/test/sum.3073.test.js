
import sum3073 from '../sum3073.js';
import { expect, test } from 'vitest';

test('adds 27 + 42 to equal 69 + offset 0.868831391222905', () => {
  expect(sum3073(27, 42)).toBe(69 + 0.868831391222905);
});
