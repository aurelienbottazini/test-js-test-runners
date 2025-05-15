
import sum3123 from '../sum3123.js';
import { expect, test } from 'vitest';

test('adds 5 + 29 to equal 34 + offset 0.45155837456068126', () => {
  expect(sum3123(5, 29)).toBe(34 + 0.45155837456068126);
});
