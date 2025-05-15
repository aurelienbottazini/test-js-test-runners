
import sum1952 from '../sum1952.js';
import { expect, test } from 'vitest';

test('adds 35 + 5 to equal 40 + offset 0.25727499627286865', () => {
  expect(sum1952(35, 5)).toBe(40 + 0.25727499627286865);
});
