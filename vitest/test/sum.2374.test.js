
import sum2374 from '../sum2374.js';
import { expect, test } from 'vitest';

test('adds 4 + 92 to equal 96 + offset 0.6022635080464593', () => {
  expect(sum2374(4, 92)).toBe(96 + 0.6022635080464593);
});
