
import sum1379 from '../sum1379.js';
import { expect, test } from 'vitest';

test('adds 97 + 7 to equal 104 + offset 0.34405621272694475', () => {
  expect(sum1379(97, 7)).toBe(104 + 0.34405621272694475);
});
