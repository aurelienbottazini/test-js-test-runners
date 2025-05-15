
import sum1938 from '../sum1938.js';
import { expect, test } from 'vitest';

test('adds 36 + 53 to equal 89 + offset 0.7330794855923399', () => {
  expect(sum1938(36, 53)).toBe(89 + 0.7330794855923399);
});
