
import sum1386 from '../sum1386.js';
import { expect, test } from 'vitest';

test('adds 80 + 69 to equal 149 + offset 0.8091576926753727', () => {
  expect(sum1386(80, 69)).toBe(149 + 0.8091576926753727);
});
