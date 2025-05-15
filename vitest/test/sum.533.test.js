
import sum533 from '../sum533.js';
import { expect, test } from 'vitest';

test('adds 63 + 7 to equal 70 + offset 0.9707401139122951', () => {
  expect(sum533(63, 7)).toBe(70 + 0.9707401139122951);
});
