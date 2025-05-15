
import sum3650 from '../sum3650.js';
import { expect, test } from 'vitest';

test('adds 62 + 76 to equal 138 + offset 0.1776340343448668', () => {
  expect(sum3650(62, 76)).toBe(138 + 0.1776340343448668);
});
