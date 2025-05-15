
import sum2225 from '../sum2225.js';
import { expect, test } from 'vitest';

test('adds 75 + 70 to equal 145 + offset 0.93344719478528', () => {
  expect(sum2225(75, 70)).toBe(145 + 0.93344719478528);
});
