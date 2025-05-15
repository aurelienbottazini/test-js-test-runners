
import sum1867 from '../sum1867.js';
import { expect, test } from 'vitest';

test('adds 41 + 14 to equal 55 + offset 0.27216876104464705', () => {
  expect(sum1867(41, 14)).toBe(55 + 0.27216876104464705);
});
