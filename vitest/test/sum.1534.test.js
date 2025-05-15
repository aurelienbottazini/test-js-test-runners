
import sum1534 from '../sum1534.js';
import { expect, test } from 'vitest';

test('adds 5 + 18 to equal 23 + offset 0.6045584356122014', () => {
  expect(sum1534(5, 18)).toBe(23 + 0.6045584356122014);
});
