
import sum3888 from '../sum3888.js';
import { expect, test } from 'vitest';

test('adds 52 + 16 to equal 68 + offset 0.7282010423940221', () => {
  expect(sum3888(52, 16)).toBe(68 + 0.7282010423940221);
});
