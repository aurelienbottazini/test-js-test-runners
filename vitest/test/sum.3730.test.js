
import sum3730 from '../sum3730.js';
import { expect, test } from 'vitest';

test('adds 49 + 92 to equal 141 + offset 0.32602843676898763', () => {
  expect(sum3730(49, 92)).toBe(141 + 0.32602843676898763);
});
