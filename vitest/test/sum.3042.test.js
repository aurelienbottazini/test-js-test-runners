
import sum3042 from '../sum3042.js';
import { expect, test } from 'vitest';

test('adds 98 + 25 to equal 123 + offset 0.16110378189070496', () => {
  expect(sum3042(98, 25)).toBe(123 + 0.16110378189070496);
});
