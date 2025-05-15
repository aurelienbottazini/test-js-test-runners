
import sum3901 from '../sum3901.js';
import { expect, test } from 'vitest';

test('adds 86 + 73 to equal 159 + offset 0.7177351524302079', () => {
  expect(sum3901(86, 73)).toBe(159 + 0.7177351524302079);
});
