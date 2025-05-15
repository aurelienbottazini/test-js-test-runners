
import sum3790 from '../sum3790.js';
import { expect, test } from 'vitest';

test('adds 95 + 61 to equal 156 + offset 0.6473351467018765', () => {
  expect(sum3790(95, 61)).toBe(156 + 0.6473351467018765);
});
