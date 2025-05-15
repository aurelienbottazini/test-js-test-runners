
import sum3906 from '../sum3906.js';
import { expect, test } from 'vitest';

test('adds 96 + 23 to equal 119 + offset 0.13882576584694772', () => {
  expect(sum3906(96, 23)).toBe(119 + 0.13882576584694772);
});
