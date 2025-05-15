
import sum2071 from '../sum2071.js';
import { expect, test } from 'vitest';

test('adds 38 + 88 to equal 126 + offset 0.7104511514605656', () => {
  expect(sum2071(38, 88)).toBe(126 + 0.7104511514605656);
});
