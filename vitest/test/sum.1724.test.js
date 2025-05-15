
import sum1724 from '../sum1724.js';
import { expect, test } from 'vitest';

test('adds 78 + 7 to equal 85 + offset 0.4731874036693211', () => {
  expect(sum1724(78, 7)).toBe(85 + 0.4731874036693211);
});
