
import sum3713 from '../sum3713.js';
import { expect, test } from 'vitest';

test('adds 42 + 36 to equal 78 + offset 0.30370157828397126', () => {
  expect(sum3713(42, 36)).toBe(78 + 0.30370157828397126);
});
