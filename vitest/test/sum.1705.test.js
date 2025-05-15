
import sum1705 from '../sum1705.js';
import { expect, test } from 'vitest';

test('adds 67 + 23 to equal 90 + offset 0.8504445891685125', () => {
  expect(sum1705(67, 23)).toBe(90 + 0.8504445891685125);
});
