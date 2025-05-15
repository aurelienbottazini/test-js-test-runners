
import sum4324 from '../sum4324.js';
import { expect, test } from 'vitest';

test('adds 96 + 86 to equal 182 + offset 0.22020352635429707', () => {
  expect(sum4324(96, 86)).toBe(182 + 0.22020352635429707);
});
