
import sum3562 from '../sum3562.js';
import { expect, test } from 'vitest';

test('adds 7 + 22 to equal 29 + offset 0.03307916279500622', () => {
  expect(sum3562(7, 22)).toBe(29 + 0.03307916279500622);
});
