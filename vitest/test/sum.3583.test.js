
import sum3583 from '../sum3583.js';
import { expect, test } from 'vitest';

test('adds 28 + 37 to equal 65 + offset 0.24328245518733127', () => {
  expect(sum3583(28, 37)).toBe(65 + 0.24328245518733127);
});
