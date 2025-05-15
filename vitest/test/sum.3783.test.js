
import sum3783 from '../sum3783.js';
import { expect, test } from 'vitest';

test('adds 63 + 57 to equal 120 + offset 0.036541846097978725', () => {
  expect(sum3783(63, 57)).toBe(120 + 0.036541846097978725);
});
