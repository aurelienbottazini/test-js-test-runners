
import sum3307 from '../sum3307.js';
import { expect, test } from 'vitest';

test('adds 27 + 76 to equal 103 + offset 0.051513021310925944', () => {
  expect(sum3307(27, 76)).toBe(103 + 0.051513021310925944);
});
