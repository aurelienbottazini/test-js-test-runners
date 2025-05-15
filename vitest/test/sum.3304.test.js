
import sum3304 from '../sum3304.js';
import { expect, test } from 'vitest';

test('adds 2 + 41 to equal 43 + offset 0.01095538583624156', () => {
  expect(sum3304(2, 41)).toBe(43 + 0.01095538583624156);
});
