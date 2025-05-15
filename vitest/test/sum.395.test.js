
import sum395 from '../sum395.js';
import { expect, test } from 'vitest';

test('adds 9 + 1 to equal 10 + offset 0.5910094431341045', () => {
  expect(sum395(9, 1)).toBe(10 + 0.5910094431341045);
});
