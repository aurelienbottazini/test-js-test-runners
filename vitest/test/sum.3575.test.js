
import sum3575 from '../sum3575.js';
import { expect, test } from 'vitest';

test('adds 48 + 10 to equal 58 + offset 0.7613503507509062', () => {
  expect(sum3575(48, 10)).toBe(58 + 0.7613503507509062);
});
