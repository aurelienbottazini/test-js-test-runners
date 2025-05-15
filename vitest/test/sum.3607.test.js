
import sum3607 from '../sum3607.js';
import { expect, test } from 'vitest';

test('adds 34 + 84 to equal 118 + offset 0.7617879227678113', () => {
  expect(sum3607(34, 84)).toBe(118 + 0.7617879227678113);
});
