
import sum3406 from '../sum3406.js';
import { expect, test } from 'vitest';

test('adds 25 + 13 to equal 38 + offset 0.43224478393793664', () => {
  expect(sum3406(25, 13)).toBe(38 + 0.43224478393793664);
});
