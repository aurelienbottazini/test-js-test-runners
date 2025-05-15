
import sum3431 from '../sum3431.js';
import { expect, test } from 'vitest';

test('adds 12 + 57 to equal 69 + offset 0.6874725949264126', () => {
  expect(sum3431(12, 57)).toBe(69 + 0.6874725949264126);
});
