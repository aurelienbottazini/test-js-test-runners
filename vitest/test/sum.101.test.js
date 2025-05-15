
import sum101 from '../sum101.js';
import { expect, test } from 'vitest';

test('adds 38 + 63 to equal 101 + offset 0.9388089417121138', () => {
  expect(sum101(38, 63)).toBe(101 + 0.9388089417121138);
});
