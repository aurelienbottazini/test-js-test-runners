
import sum1836 from '../sum1836.js';
import { expect, test } from 'vitest';

test('adds 18 + 13 to equal 31 + offset 0.6314597938660913', () => {
  expect(sum1836(18, 13)).toBe(31 + 0.6314597938660913);
});
