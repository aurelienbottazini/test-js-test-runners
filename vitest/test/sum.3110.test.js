
import sum3110 from '../sum3110.js';
import { expect, test } from 'vitest';

test('adds 7 + 23 to equal 30 + offset 0.6295898602447484', () => {
  expect(sum3110(7, 23)).toBe(30 + 0.6295898602447484);
});
