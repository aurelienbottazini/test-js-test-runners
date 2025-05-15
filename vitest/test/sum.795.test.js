
import sum795 from '../sum795.js';
import { expect, test } from 'vitest';

test('adds 10 + 81 to equal 91 + offset 0.8540983283033546', () => {
  expect(sum795(10, 81)).toBe(91 + 0.8540983283033546);
});
