
import sum1896 from '../sum1896.js';
import { expect, test } from 'vitest';

test('adds 55 + 84 to equal 139 + offset 0.7919065489295614', () => {
  expect(sum1896(55, 84)).toBe(139 + 0.7919065489295614);
});
