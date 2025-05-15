
import sum1973 from '../sum1973.js';
import { expect, test } from 'vitest';

test('adds 2 + 29 to equal 31 + offset 0.2071619600870288', () => {
  expect(sum1973(2, 29)).toBe(31 + 0.2071619600870288);
});
