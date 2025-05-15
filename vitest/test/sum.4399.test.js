
import sum4399 from '../sum4399.js';
import { expect, test } from 'vitest';

test('adds 95 + 26 to equal 121 + offset 0.7478288450423575', () => {
  expect(sum4399(95, 26)).toBe(121 + 0.7478288450423575);
});
