
import sum3190 from '../sum3190.js';
import { expect, test } from 'vitest';

test('adds 34 + 8 to equal 42 + offset 0.14722089811766692', () => {
  expect(sum3190(34, 8)).toBe(42 + 0.14722089811766692);
});
