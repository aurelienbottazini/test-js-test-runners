
import sum3336 from '../sum3336.js';
import { expect, test } from 'vitest';

test('adds 28 + 37 to equal 65 + offset 0.7591082847251635', () => {
  expect(sum3336(28, 37)).toBe(65 + 0.7591082847251635);
});
