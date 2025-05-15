
import sum3055 from '../sum3055.js';
import { expect, test } from 'vitest';

test('adds 58 + 5 to equal 63 + offset 0.08675224207767696', () => {
  expect(sum3055(58, 5)).toBe(63 + 0.08675224207767696);
});
