
import sum2065 from '../sum2065.js';
import { expect, test } from 'vitest';

test('adds 67 + 34 to equal 101 + offset 0.564145734240105', () => {
  expect(sum2065(67, 34)).toBe(101 + 0.564145734240105);
});
