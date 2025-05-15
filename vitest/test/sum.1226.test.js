
import sum1226 from '../sum1226.js';
import { expect, test } from 'vitest';

test('adds 69 + 31 to equal 100 + offset 0.8538118772126403', () => {
  expect(sum1226(69, 31)).toBe(100 + 0.8538118772126403);
});
