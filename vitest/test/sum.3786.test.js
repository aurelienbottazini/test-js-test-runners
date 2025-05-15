
import sum3786 from '../sum3786.js';
import { expect, test } from 'vitest';

test('adds 50 + 14 to equal 64 + offset 0.3630493843397662', () => {
  expect(sum3786(50, 14)).toBe(64 + 0.3630493843397662);
});
