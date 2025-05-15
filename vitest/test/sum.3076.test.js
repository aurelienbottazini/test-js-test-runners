
import sum3076 from '../sum3076.js';
import { expect, test } from 'vitest';

test('adds 80 + 1 to equal 81 + offset 0.6528209937832006', () => {
  expect(sum3076(80, 1)).toBe(81 + 0.6528209937832006);
});
