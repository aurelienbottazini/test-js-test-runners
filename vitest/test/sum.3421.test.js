
import sum3421 from '../sum3421.js';
import { expect, test } from 'vitest';

test('adds 68 + 10 to equal 78 + offset 0.8767480010040852', () => {
  expect(sum3421(68, 10)).toBe(78 + 0.8767480010040852);
});
