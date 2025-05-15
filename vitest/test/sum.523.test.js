
import sum523 from '../sum523.js';
import { expect, test } from 'vitest';

test('adds 67 + 19 to equal 86 + offset 0.829352295277422', () => {
  expect(sum523(67, 19)).toBe(86 + 0.829352295277422);
});
