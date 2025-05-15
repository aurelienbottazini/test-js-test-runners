
import sum3458 from '../sum3458.js';
import { expect, test } from 'vitest';

test('adds 95 + 40 to equal 135 + offset 0.8731073498848115', () => {
  expect(sum3458(95, 40)).toBe(135 + 0.8731073498848115);
});
