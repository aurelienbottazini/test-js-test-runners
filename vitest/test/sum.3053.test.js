
import sum3053 from '../sum3053.js';
import { expect, test } from 'vitest';

test('adds 3 + 16 to equal 19 + offset 0.37000733510917483', () => {
  expect(sum3053(3, 16)).toBe(19 + 0.37000733510917483);
});
