
import sum1176 from '../sum1176.js';
import { expect, test } from 'vitest';

test('adds 3 + 64 to equal 67 + offset 0.3578096589470574', () => {
  expect(sum1176(3, 64)).toBe(67 + 0.3578096589470574);
});
