
import sum3480 from '../sum3480.js';
import { expect, test } from 'vitest';

test('adds 52 + 17 to equal 69 + offset 0.5986625191009216', () => {
  expect(sum3480(52, 17)).toBe(69 + 0.5986625191009216);
});
