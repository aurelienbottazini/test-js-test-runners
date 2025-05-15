
import sum3734 from '../sum3734.js';
import { expect, test } from 'vitest';

test('adds 66 + 11 to equal 77 + offset 0.43198798349858203', () => {
  expect(sum3734(66, 11)).toBe(77 + 0.43198798349858203);
});
