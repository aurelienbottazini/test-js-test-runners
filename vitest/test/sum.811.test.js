
import sum811 from '../sum811.js';
import { expect, test } from 'vitest';

test('adds 40 + 38 to equal 78 + offset 0.021970398675276948', () => {
  expect(sum811(40, 38)).toBe(78 + 0.021970398675276948);
});
