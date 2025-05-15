
import sum3166 from '../sum3166.js';
import { expect, test } from 'vitest';

test('adds 58 + 81 to equal 139 + offset 0.7101715729937097', () => {
  expect(sum3166(58, 81)).toBe(139 + 0.7101715729937097);
});
