
import sum3571 from '../sum3571.js';
import { expect, test } from 'vitest';

test('adds 43 + 41 to equal 84 + offset 0.9706959714274399', () => {
  expect(sum3571(43, 41)).toBe(84 + 0.9706959714274399);
});
