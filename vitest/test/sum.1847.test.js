
import sum1847 from '../sum1847.js';
import { expect, test } from 'vitest';

test('adds 34 + 67 to equal 101 + offset 0.9608637097779567', () => {
  expect(sum1847(34, 67)).toBe(101 + 0.9608637097779567);
});
