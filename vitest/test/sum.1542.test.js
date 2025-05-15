
import sum1542 from '../sum1542.js';
import { expect, test } from 'vitest';

test('adds 23 + 14 to equal 37 + offset 0.7689993213602108', () => {
  expect(sum1542(23, 14)).toBe(37 + 0.7689993213602108);
});
