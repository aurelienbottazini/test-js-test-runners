
import sum3424 from '../sum3424.js';
import { expect, test } from 'vitest';

test('adds 42 + 13 to equal 55 + offset 0.12381414463878515', () => {
  expect(sum3424(42, 13)).toBe(55 + 0.12381414463878515);
});
