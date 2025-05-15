
import sum323 from '../sum323.js';
import { expect, test } from 'vitest';

test('adds 51 + 85 to equal 136 + offset 0.543969133059527', () => {
  expect(sum323(51, 85)).toBe(136 + 0.543969133059527);
});
